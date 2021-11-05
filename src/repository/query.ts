import { Repository } from "./type";
import { getAllRepositories } from "./resolver";

export type RepositoriesQuery = {
  repos: [Repository];
};

/* export const rootResolver = {
  repos: (owner: string) => getAllRepositories(owner)
}; */
