export const ErrorRepos = ({ userParam }: { userParam: string }) => {
  return (
    <section className="flex h-screen w-full flex-col items-center justify-center gap-4 dark:bg-[#09090b]">
      <h1 className="text-4xl">Error getting repos to {userParam} 😐</h1>
    </section>
  );
};
