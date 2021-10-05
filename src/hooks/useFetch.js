import { useState, useEffect } from "react";

//custom hook must start with use
const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();

        fetch(url, { signal: abortController.signal })
            .then((res) => {
                if (!res.ok) {
                    throw Error("could not fetch the data for that resource");
                }
                return res.json();
            })
            .then((data) => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch((error) => {
                if (error.name === "AbortError") {
                    console.log("fetch aborted");;
                }
                else {
                    setIsPending(false);
                    setError(error.message);
                }
            });

        //cleanup function
        return () => abortController.abort();

    }, [url]);

    return { data, isPending, error };

}

export default useFetch;