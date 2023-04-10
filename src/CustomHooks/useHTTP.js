import { useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:8000"

export const usePost = () => {
    const [response, setResponse] = useState(null);
    const [fetching, setFetching] = useState(null);

    const postData= async (endopoint, object) => {
        try{
            setFetching(true);
            const responseData = await axios.post(`${BASE_URL}/${endopoint}`, object);
            setResponse(responseData);
            setFetching(false);
        }catch (e){
            console.log(e);
        }
    }
    return [postData, response, fetching];
}

export const useGet  = () => {

    const [response, setResponse] = useState(null);
    const [fetching, setFetching] = useState(null);
    const getData = async (endopoint) =>{
        const getData = await axios.get(`${BASE_URL}/${endopoint}`);
        setResponse(getData);
        setFetching(false);
    }
}