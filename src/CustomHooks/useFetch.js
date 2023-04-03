// custom hook es una funcion personaliza que involucra uno o mas hooks
import { useState, useEffect } from "react"
import { environment } from "../Components/Constants";

console.log(environment)
  export const useFetch = (url, initialState={}) => {
    const [data, setData] = useState({});
    const [fetching, setFeching] = useState(true);
    const [error, setError] = useState(false);

   const fetchData = async () => {
        try{
            setFeching(true);
        const result = await fetch(`${environment.BASE_URL}/${url}`);
        const data = await result.json(); 
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