import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { UserRepositories } from "../../types";
import { Repositories } from "./Repositories";

export const UserRepos = ({ data }: { data: UserRepositories }) => {
  return (
    <section className="space-y-6 p-10 pb-16">
      <header className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">Top Repositories</h2>
        <p className="text-muted-foreground">
          {`Update the url example ${window.location.origin}/repository?user=luchooo`}
        </p>
      </header>
      <Separator className="my-6" />
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <div className="flex-1 w-full">
          <Card className="flex flex-col justify-center items-center">
            <CardHeader>
              <CardDescription className="flex flex-row gap-4 items-center">
                <Avatar>
                  <AvatarImage
                    src={data.avatarUrl}
                    alt={data.user}
                    className="bg-white"
                  />
                  <AvatarFallback className="uppercase">
                    {data.user.substring(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <span className="capitalize">{data.user}</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="w-full">
              <Repositories repos={data.repositories} />
            </CardContent>
            <CardFooter className="flex justify-between"></CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};
