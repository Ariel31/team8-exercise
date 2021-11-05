const axios = require("axios");

const endPoints = {
  allReposOfOwner: "https://api.github.com/users/$param/repos"
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
