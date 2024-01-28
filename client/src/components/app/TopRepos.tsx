import { useReposData } from "../../hooks/useReposData";
import { ErrorRepos } from "./ErrorRepos";
import { SkeletonTopRepos } from "./SkeletonTopRepos";
import { UserRepos } from "./UserRepos";

export const TopRepos = () => {
  const { data, error, isLoading, userParam } = useReposData();

  return (
    <>
      {isLoading && <SkeletonTopRepos />}
      {error && <ErrorRepos userParam={userParam} />}
      {data && <UserRepos data={data} />}
    </>
  );
};
