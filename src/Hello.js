import React,{ useRef } from 'react'

//React.memo checks if props have changed
const Hello = React.memo((props) => {
 const renders = useRef(0)

 console.log(renders.current++)

    return (
        <div>
            <button onClick={props.increment} >hello</button>
        </div>
    )
});

export default Hello
