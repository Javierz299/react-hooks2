import React from 'react'

const Hello = () => {
    React.useEffect(() => {
        console.log('hello render')

        return () => {
            console.log("hello unmount")
        }
    },[])


    return (
        <div>
            hello
        </div>
    )
}

export default Hello
