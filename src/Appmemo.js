import React,{ useState, useMemo, useCallback } from 'react'
import Count from './Count'

const Appmemo = () => {
    console.log('App re-render')
    const [text, setText] = useState("")

    return (
        <div className="App">
                {/* {count gets re-rendered when typing
                    regardless if count has changed.
                    use React.memo to shallow check, 
                    if count has updated. if not, no re-render
                } */}
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <Count />
        </div>
    )
}

const Appmemo1 = () => {
    console.log('App re-render')
    const [text, setText] = useState("")

    const onOdd = useCallback(() => {
        setText("")
    },[setText])//depend

    return (
        <div className="App">
            <input value={text} onChange={(e) => setText(e.target.value)} />
                    {/* Count now has a new property to check
                        will cause re-renders on typing
                    */}
            <Count onOdd={onOdd} />
        </div>
    )
}

const Appmemo2 = () => {
    console.log('App re-render')
    const [text, setText] = useState("")

    const onOdd = useCallback(() => {
        setText("")
    },[setText])//depend

    const data = {isEven: false};

    return (
        <div className="App">
            <input value={text} onChange={(e) => setText(e.target.value)} />
                    {/* Count now has a new property to check
                        will cause re-renders on typing
                    */}

                    {/* new prop, another comparison check needed */}
            <Count onOdd={() => setText('')} data={data} />
        </div>
    )
}

const Appmemo3 = () => {
    console.log('App re-render')
    const [text, setText] = useState("")

    const onOdd = useCallback(() => {
        setText("")
    },[setText])//depend
                                        //makes sure object does
                                        //does not get created everytime
                                        //unless a dependency changes..
                                        //no depend given
    const data = useMemo(() => ({isEven: false}),[])
                                                

    return (
        <div className="App">
            <input value={text} onChange={(e) => setText(e.target.value)} />
                    {/* Count now has a new property to check
                        will cause re-renders on typing
                    */}

                    {/* new prop, another comparison check needed */}
            <Count onOdd={onOdd} data={data} />
        </div>
    )
}

export default Appmemo3;
