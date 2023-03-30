// custom hook es una funcion personaliza que involucra uno o mas hooks
import { useState, useEffect } from "react"

const BASE_URL = "https://rickandmortyapi.com/api";

  export const useFetch = (url, initialState={}) => {
    const [data, setData] = useState({});
    const [fetching, setFeching] = useState(true);
    const [error, setError] = useState(false);

   const fetchData = async () => {
        try{
        const result = await fetch(`${BASE_URL}/${url}`);
        const data = await result.json(); 
        console.log(data);
        setData(data);
        setFeching(false);

        } catch (e) {
            setData(initialState);
            setFeching(false);
            setError(true);
        }
    }

    useEffect(() => {
        fetchData();
    },[url]);

    return [data, fetching, error]
}