const axios = require("axios");

const endPoints = {
  allReposOfOwner: "https://api.github.com/users/$param/repos",
  singleRepoOfOwner: "https://api.github.com/repos/$param/$param2",
  hooksInRepoOfOwner: "https://api.github.com/repos/$param/$param2/hooks",
  filesInRepoOfOwner:
    "https://api.github.com/repos/$param/$param2/git/trees/master?recursive=1",
  getFileOfOwnerInRepo:
    "https://api.github.com/repos/$param/$param2/contents/$param3"
};

export const getUsersRepositories = async owner => {
  try {
    const url = endPoints.allReposOfOwner.replace(`$param`, owner);
    const { data } = await axios.get(url);
    return data;
  } catch (ex) {
    console.error(ex);
  }
};

export const getRepoOfUser = async (owner, repoName) => {
  try {
    let endPoint = endPoints.singleRepoOfOwner;
    endPoint = endPoint.replace(`$param`, owner);
    endPoint = endPoint.replace(`$param2`, repoName);

    const { data } = await axios.get(endPoint);
    return data;
  } catch (ex) {
    console.error(ex);
  }
};

export const getYamlContent = async (owner, repoName, path) => {
  try {
    let endPoint = endPoints.singleRepoOfOwner;
    endPoint = endPoint.replace(`$param`, owner);
    endPoint = endPoint.replace(`$param2`, repoName);
    endPoint = endPoint.replace(`$param3`, path);

    const { data } = await axios.get(endPoint);
    return data.content;
  } catch (ex) {
    console.error(ex);
  }
};

export const getFilesInRepoOfOwner = async (owner, repoName) => {
  try {
    let endPoint = endPoints.filesInRepoOfOwner;
    endPoint = endPoint.replace(`$param`, owner);
    endPoint = endPoint.replace(`$param2`, repoName);

    const { data } = await axios.get(endPoint);
    return data;
  } catch (ex) {
    console.error(ex);
  }
};

export const getHooksOfOwnerRepo = async (owner, repoName) => {
  try {
    let endPoint = endPoints.hooksInRepoOfOwner;
    endPoint = endPoint.replace(`$param`, owner);
    endPoint = endPoint.replace(`$param2`, repoName);

    const { data } = await axios.get(endPoint);
    return { hooks: data };
  } catch (ex) {
    console.error(ex);
  }
};
