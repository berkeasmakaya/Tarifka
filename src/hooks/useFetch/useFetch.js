import axios from "axios";
import { useState, useEffect } from "react";

function useFetch(url){
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const {data:responseData} = await axios.get(url);
        setData(responseData);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return {data};
}

export default useFetch;