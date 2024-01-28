import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Repository } from "@/types";
import { RepoItem } from "./RepoItem";

export const Repositories = ({ repos }: { repos: Repository[] }) => {
  const sumStars = repos.reduce(
    (accumulator, repo) => accumulator + repo.watchers,
    0
  );

  return (
    <Table>
      <TableCaption>A list of repositories.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead className="text-center">Language</TableHead>
          <TableHead className="text-right">Stars</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {repos.map((repo) => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>Total</TableCell>
          <TableCell className="text-right">
            {(sumStars / 1000).toFixed(1) + " k"}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};
