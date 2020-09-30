import React, { useEffect, useState } from 'react';
import Hello from './Hello'
import './App.css';

import { useForm } from './useForm';
import { useFetch } from './useFetch'

const App = () => {
  ///////useForm instead of useState/////////
    const [values, handleChange] = useForm({email: "", password: "", firstName: ""});
    const [showHello, setHello] = useState(true)

    // useEffect(() => {
    //     effect; componentDidMount
    //     return () => {
    //         cleanup; componentWillUnmount
    //     }
    // }, [input]); triggers componentDidmount on state change

    // useEffect(() => {
    //     console.log("componentDidMount") //use case add eventListener
    //     return () => {
    //     console.log("cleanup/Unmount") //use case remove eventListener

    //     }
   // }, []); //triggers componentDidmount on state change and cleanup/unmount
        //shallow comparison of values
        //[values.firstname,values.email] => [values] all values

   const {data,loading} = useFetch('http://numbersapi.com/random/trivia')

  return (

      <div>
          {showHello && <Hello />}
          <button onClick={() => setHello(!showHello)} >toggleHello</button>

          <div>
              {loading ? "loading..." : data}
          </div>

        <h1>useForm() w/o useState</h1>
          <input name="firstName" value={values.firstName} 
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
      </div>
  );
}

export default App;
