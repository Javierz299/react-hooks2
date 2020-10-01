import React, { useEffect, useState,useRef } from 'react';
import Hello from './Hello'
import './App.css';

import { useForm } from './useForm';
import { useFetch } from './useFetch'

const App = () => {
  ///////useForm instead of useState/////////
    const [values, handleChange] = useForm({email: "", password: "", firstName: ""});
    const [showHello, setHello] = useState(true)

    const inputRef = useRef(); // can access useRef values with .current
                               // isCurrent = useRef(true) => isCurrent.current
                               //if(isCurrent.current)
                               // isCurrent.current = false
                              
    // const hello = useRef(() => log("hello"))
    // <button onClick={() => inputRef.current.focus(); hello.current()} >

   const {data,loading} = useFetch('http://numbersapi.com/random/trivia')
  return (

      <div>
          {showHello && <Hello />}
          <button onClick={() => setHello(!showHello)} >toggleHello</button>

          <div>
              {loading ? "loading..." : data}
          </div>

        <h1>useForm() w/o useState</h1>
          <input ref={inputRef} name="firstName" value={values.firstName} 
            onChange={handleChange}
            placeholder="first name..."
          />

          <input name="email" value={values.email} 
            onChange={handleChange}
            placeholder="email.."
          />
          
          <input type="password" name="password" 
            value={values.password}
            onChange={handleChange}
            placeholder="password..."
          />

<button onClick={() => inputRef.current.focus()} >FocusRef</button>

      </div>
  );
}

export default App;
