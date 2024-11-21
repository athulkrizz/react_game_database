import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genres {
    id: number;
    name: string;
}

interface FetchGenresResponse {
    count: number;
    results: Genres[];
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genres[]>([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true)
        apiClient
            .get<FetchGenresResponse>("/genres", { signal: controller.signal })
            .then(res => {
                setGenres(res.data.results)
                setLoading(false);
            })
            .catch((err) => {
                if (err instanceof CanceledError) {
                    return
                }
                setError(err.message)
            })
        return () => controller.abort();
    }, []);
    return { genres, error, isLoading }
}

export default useGenres;