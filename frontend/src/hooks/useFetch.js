import { useEffect, useState } from "react"

const useFetch = ({path, param}) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8000/${path}/${param ? param : ""}`
        )
        .then((data) => {
            return data.json()
        })
        .then((data) => {
            setData(prev => data)
        })
    }, [path, param])
    return [data];
}

export default useFetch;
