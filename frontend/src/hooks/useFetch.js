import { useEffect, useState } from "react"

const useFetch = ({path, param}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        const fetchUrl = async () => {
            try {
                const data = await fetch(`https://quiz-app-backend-cyan.vercel.app/${path}/${param ? param : ""}`);
                const parsedData = await data.json();
                setData(prev => parsedData);
                setLoading(false);
            }
            catch (err) {
                console.log(err);
            }
        }
        fetchUrl();
    }, [path, param])
    return {data, loading};
}

export default useFetch;
