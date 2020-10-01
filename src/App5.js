import React, { useState, useCallback } from 'react'
import Hello  from './Hello'
import Square from './Square'

const App5 = () => {
    //////////////useCallback hook////////////////
    const [count, setCount] = useState(0)

    const favoriteNums = [2,4,5,6,7]

    const increment = useCallback(() => {
        setCount(prev => prev + 1)
    },[setCount])

    const incrementFavs = useCallback((n) => {
        setCount(prev => prev + n)
    },[setCount])

    return (
        <div>
            <Hello increment={increment} />
            <div>
                app component
                {count}
            </div>
            <div>
                {favoriteNums.map(n => {
                    return (
                        <Square key={n} incrementFavs={incrementFavs} n={n}/>
                    )
                })

                }
            </div>
        </div>
    )
}

export default App5
