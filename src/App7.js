import React, { useReducer, useState } from 'react'

                //{todos: []} =>  state = { todos: []}
const reducer = (state, action) =>{
    console.log('state',{...state})
    switch(action.type){
        case "ADD":
            return {
                ...state,
               todos: [...state.todos, {title: action.payload}]
            };
        case "TOGGLE":
            return {
                ...state,
                todos: state.todos.map((todo,i) => (
                    i === action.payload ? {...todo, completed: !todo.completed} : todo
                ))
            };
        default: 
            return state;
    }

}

////////useReducer alternative for useState
const App7 = () => {     
          //[state,dispatch]                                           //initialize
    const [{todos},dispatch] = useReducer(reducer, {todos: []}) //(reducer, () => 0) used if initial state tooke time to complete 
    const [text, setText] = useState("")

    console.log('todos',todos)
    return (
        <div>
          <form onSubmit={(e) => {e.preventDefault() 
            dispatch({type: "ADD", payload: text});
            setText("")
            }} >
              <input value={text} onChange={(e) => setText(e.target.value)} />
          </form>
        todo: {todos.map((todo,i) => <li onClick={() => dispatch({type: "TOGGLE", payload: i})} 
                style={{textDecoration: todo.completed ? 'line-through' : ""}}>
                {todo.title}
            </li>) }
        <div>
        <pre>{JSON.stringify(todos,null,2)}</pre>
        </div>
        </div>
    )
}

export default App7
