import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
import APIClient from "../services/api-client";
import Genres from "../entities/Genres";

const apiClient = new APIClient<Genres>("/genres");

const useGenres = () =>
    useQuery({
        queryKey: ["genres"],
        queryFn: apiClient.getAll,
        staleTime: ms("24h"),
        initialData: genres
    })

export default useGenres;