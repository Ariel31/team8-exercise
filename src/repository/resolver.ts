import {
  getUsersRepositories,
  getRepoOfUser,
  getFilesInRepoOfOwner
} from "../services/git-api-service";
import { Repository } from "./type";
import async from "async";
import { getYamlContentFromFiles } from "./helper/get-yaml";

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

export const getRepositoriesDetails = async (
  owner: string,
  names: string[]
) => {
  let promises = names.map(name => [
    getRepoOfUser(owner, name),
    getFilesInRepoOfOwner(owner, name)
    //! END POINT RETURNS 404
    //getHooksOfOwnerRepo(owner, name)
  ]);

  return await async.map(promises, async promiseForRepo => {
    let combinedResult = {};
    const resolvedPromises = await Promise.all(promiseForRepo);
    resolvedPromises.forEach((resolvedPromise: Object) => {
      combinedResult = { ...resolvedPromise, ...combinedResult };
    });

    const yamlContent = await getYamlContentFromFiles(
      owner,
      combinedResult["name"],
      combinedResult["tree"]
    );

    return {
      name: combinedResult["name"],
      size: combinedResult["size"],
      owner: combinedResult["owner"].login,
      privateOrPublic: combinedResult["source"].private,
      files: combinedResult["tree"].length,
      yamlContent
    };
  });
};
