const { getUsersRepositories } = require("../services/git-api-service");
import { Repository } from "./type";

export const getAllRepositories = async (owner: string) => {
  const ownersRepositories = await getUsersRepositories(owner);
  const repositoriesData: Repository[] = ownersRepositories.map(
    (repoDetails: any) => ({
      name: repoDetails.name as string,
      size: repoDetails.size as number,
      owner: repoDetails.owner.login as string
    })
  );
  return repositoriesData;
};
