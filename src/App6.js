import React, { useState, useMemo, useCallback } from 'react'
import { useFetch } from './useFetch'

//////////this works with useMemo
// const longestWord = (arr) => {
//     let longestWord = ''

//     if(!arr) return []

//     console.log('computing longest word')

//     Object.values(JSON.parse(arr)).forEach(sentence => {
//        let arrOfWords = sentence.split(' ')
//         //console.log('sentence',arrOfWords)
//         arrOfWords.forEach(word => {
//             if(word.length > longestWord.length){
//                 longestWord = word
//             }
//             if(longestWord.length === word.length){
//                 longestWord += " " + word
//             }
//         })
//     });

//     // console.log("longest word is: ", longestWord)
//     return longestWord
// }

const App6 = () => {
    const [count, setCount] = useState(0);
    
    const {data} = useFetch('https://api.kanye.rest/')

    ///////////////////useCallback 
    const longestWord = useCallback((arr) => {
        let longestWord = ''

        if(!arr) return []

        console.log('computing longest word')

        Object.values(JSON.parse(arr)).forEach(sentence => {
           let arrOfWords = sentence.split(' ')
            //console.log('sentence',arrOfWords)
            arrOfWords.forEach(word => {
                if(word.length > longestWord.length){
                    longestWord = word
                }
                if(longestWord.length === word.length){
                    longestWord += " " + word
                }
            })
        });

        // console.log("longest word is: ", longestWord)
        return longestWord
    },[]);




    const word = useMemo(() => longestWord(data), [data,longestWord])


    return (
        <div>
            <div>
                count: {count}
                <div>
                    <button onClick={() => setCount(count + 1)} >increment</button>
                </div>
                <div>
                    longest word(s): {word}
                </div>
            </div>
        </div>
    )
}

export default App6
