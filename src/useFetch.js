import React from 'react'
import { useEffect,useState } from 'react'

export const useFetch = (url) => {
    const [state, setState] = useState({data: null,loading: true})

   useEffect(() => {
       setState({data: null, loading: true})
       async function fetchData(){
           const response = await fetch(url)
                .then(res => res.text())
                .then(response => {
                setState({data: response, loading: false})
            });
                return response;
       };
        fetchData();
   },[url,setState]);//re renders everytime url changes; are called dependecies

   return state;
};
