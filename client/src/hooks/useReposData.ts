import { useLocation } from "react-router-dom";
import useSWR from "swr";
import { UserRepositories } from "../types";
import { fetchRepos } from "../utils/fetchRepos";

export const useReposData = () => {
    const location = useLocation();
    let userParam = new URLSearchParams(location.search).get("user");
    if (!userParam) userParam = "google";

    const { data, error, isLoading } = useSWR<UserRepositories>(
        `/api/repos?user=${userParam}`, fetchRepos);
    return { data, error, isLoading, userParam };
}