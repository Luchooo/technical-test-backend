import { Link } from "react-router-dom";

export const NotFoundScreen = () => {
  return (
    <section className="flex h-screen w-full flex-col items-center justify-center gap-4 dark:bg-[#09090b]">
      <h1 className="text-4xl">Page not found 😐</h1>
      <Link
        className="rounded border border-white p-4 shadow-[5px_5px_0px_1px_#fff] active:shadow-none"
        to={"/"}
      >
        Go Home
      </Link>
    </section>
  );
};
