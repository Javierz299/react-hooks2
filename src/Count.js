import React, { useState, useRef } from 'react'
////////////React.memo checks if count has been updated
/////////// if its still the same, wont re-render
//////////shallow comparison
const Count = React.memo(() => {
    console.log('Count re-render')
    const [count, setCount] = useState(0)
    const renders = useRef(0)
    return (
        <div className="App">
            <div>count: {count}</div>
            <div>renders: {renders.current++}</div>
            <button onClick={() => setCount((curr) => curr + 1)} >Increment</button>
        </div>
    )
});

const Count1 = React.memo((props) => {
    console.log('Count re-render')
    const [count, setCount] = useState(0)
    const renders = useRef(0)
    return (
        <div className="App">
            <div>count: {count}</div>
            <div>renders: {renders.current++}</div>
            <button onClick={() => {
                {/* new property to check
                    component re-renders again
                */}
                if(count % 2 === 0){
                    props.onOdd()
                }
                setCount((curr) => curr + 1)
            }
            }>Increment</button>
        </div>
    )
});

const Count2 = React.memo((props) => {
    console.log('Count re-render')
    const [count, setCount] = useState(0)
    const renders = useRef(0)
    return (
        <div className="App">
            <div>count: {count}</div>
            <div>renders: {renders.current++}</div>
            <button onClick={() => {
                {/* new property to check
                    component re-renders again
                */}
                if(count % 2 === 0){
                    props.onOdd()
                } else {
                    console.log("testing")
                    props.data.isEven = true;
                }
                setCount((curr) => curr + 1)
                console.log('data count',props.data)
            }
            }>Increment</button>
        </div>
    )
}, (prevProps, nextProps) => {//comparing props
    console.log('prev-props',prevProps)
    console.log('next-props',nextProps)
    if(prevProps.data.isEven !== nextProps.data.isEven){
        return false;
    }
    return true;
});


const Count3 = React.memo((props) => {
    console.log('Count re-render')
    const [count, setCount] = useState(0)
    const renders = useRef(0)
    return (
        <div className="App">
            <div>count: {count}</div>
            <div>renders: {renders.current++}</div>
            <button onClick={() => {
                {/* new property to check
                    component re-renders again
                */}
                if(count % 2 === 0){
                    props.onOdd()
                } 
                setCount((curr) => curr + 1)
            }
            }>Increment</button>
        </div>
    )
});

export default Count3;