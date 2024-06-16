import { useEffect, useState } from "react";
import axios from "axios";

export const usePaises = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const getPaises = async () => {
        try {
            setLoading(true);
            const response = await axios.get('data.json');
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
