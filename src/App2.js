import React, { useState } from 'react';
import './App.css';
import { useForm } from './useForm';

/*function someExpensiveIntialState(){
  /*expensive code

  return ;
}*/


const App = () => {
//useState(() => someExpensiveIntialState()); called once

// const [count, setCount] = useState(10);
  const [{count,count2}, setCount] = useState({count: 10, count2: 15})

  //can use multiple useState()
  //wont effect updating values
  // const [count, setCount] = useState(10)
  // const [count2, setCount2] = useState(20)

  /*<button onClick={() => 
        setCount((curr) => curr + 1)
        setCount2((curr) => curr + 1 )
  )} >+</button>*/


  /////useState with inputs////////
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

  ///////useForm instead of useState/////////
    const [values, handleChange] = useForm({email: "", password: ""})
      //console.log('handlechange',handleChange)


  return (
    <div className="App">
      <h1>useState()</h1>
      <div>
        count 1: {count}
      </div>
      <div>
        count 2: {count2}
      </div>
                    {/* {updater function, current state} */}
      {/* <button onClick={() => setCount((curr) => curr + 1)} >+</button> */}

        {/* value2 disappeared, doesnt do any merging. to keep all values use spread ...state*/}
      {/* <button onClick={() => setCount((curr) => ({count: curr.count + 1}) )} >+</button> */}
      <button onClick={() => setCount((curr) => ({...curr, count: curr.count + 1}) )} >+</button>

                                                       {/* need to provide all keys if updating  */}
      <button onClick={() => setCount((curr) => ({curr, count: curr.count + 1, count2: curr.count2}) )} >+</button>


      {/* <button onClick={() => setCount(count + 1)} >+</button> */}

      {/* <div>
        <h1>useState() w/o useForm</h1>
          <input name="email" value={email} 
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email.."
          />
          <input type="password" name="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password..."
          />
      </div> */}

      <div>
        <h1>useForm() w/o useState</h1>
          <input name="email" value={values.email} 
            onChange={handleChange}
            placeholder="email.."
          />
          <input type="password" name="password" 
            value={values.password}
            onChange={handleChange}
            placeholder="password..."
          />
      </div>

  
    </div>
  );
}

export default App;
