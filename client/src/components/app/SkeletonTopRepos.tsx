import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonTopRepos() {
  return (
    <div className="flex flex-col space-y-3 w-full h-screen justify-center items-center">
      <Skeleton className="h-[250px] w-[500px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-10 w-[500px]" />
        <Skeleton className="h-10 w-[500px]" />
      </div>
    </div>
  );
}
