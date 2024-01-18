import { useEffect, useState } from "react"

const useFetch = ({path, param}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetch(`https://quiz-app-backend-cyan.vercel.app/${path}/${param ? param : ""}`
        )
        .then((data) => {
            return data.json()
        })
        .then((data) => {
            setData(prev => data)
            setLoading(false)
        })
    }, [path, param])
    return {data, loading};
}

export default useFetch;
