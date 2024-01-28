export type Repository = {
    id: string;
    name: string;
    url: string;
    language: string;
    topics: string;
    watchers: number;
}

export type UserRepositories = {
    avatarUrl: string
    user: string
    repositories: Repository[]
}