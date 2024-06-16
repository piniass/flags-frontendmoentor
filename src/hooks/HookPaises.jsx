import { useEffect, useState } from "react";
import axios from "axios";

export const usePaises = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const url = 'data.json'
    console.log(url)
    const getPaises = async () => {
        try {
            setLoading(true);
            const response = await axios.get('/data.json');
            console.log(response)
            setData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    const getRegiones = () => {
        
    }

    useEffect(() => {
        getPaises();
    }, []);

    return { data, loading };
};
