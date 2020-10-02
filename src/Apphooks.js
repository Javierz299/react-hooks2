import React from 'react'
import './App.css'

import { useSelector, useDispatch} from 'react-redux'

const Apphooks = () => {
    const counter = useSelector(state => {
       // console.log('state',state.hooks.counter)
       return state.hooks.counter
    });
    console.log('counter',counter)
    const dispatch = useDispatch();


    return (
        <div>
            <div>
                Redux Hook: {counter}
                <button onClick={() => dispatch({type: "INCREMENT", payload: 1})} >increment</button>
                <button onClick={() => dispatch({type: "DECREMENT", payload: 1})} >increment</button>

            </div>
        </div>
    )
}

export default Apphooks
