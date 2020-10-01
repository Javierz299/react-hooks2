import React,{ useRef } from 'react'

//React.memo checks if props have changed
const Square = React.memo((props) => {
 const renders = useRef(0)

 console.log(renders.current++)

    return (
        <div>
            <button onClick={() => props.incrementFavs(props.n)} >{props.n}</button>
        </div>
    )
});

export default Square
