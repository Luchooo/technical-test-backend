import { TableCell, TableRow } from "@/components/ui/table";
import { Repository } from "@/types";

export const RepoItem = ({ repo }: { repo: Repository }) => {
  return (
    <>
      <TableRow key={repo.id} className="group">
        <TableCell className="font-medium capitalize truncate group-hover:underline">
          <a href={repo.url} target="_blank">
            {repo.name}
          </a>
        </TableCell>
        <TableCell className="text-center">{repo.language ?? "-"}</TableCell>
        <TableCell className="text-right">
          {(repo.watchers / 1000).toFixed(1) + " k"}
        </TableCell>
      </TableRow>
    </>
  );
};
