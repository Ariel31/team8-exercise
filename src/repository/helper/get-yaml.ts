import { getYamlContent } from "../../services/git-api-service";

export const getYamlContentFromFiles = async (owner, repoName, files) => {
  const yamlFile = files.find(file => file["path"].includes(".yaml"));
  console.log({ yamlFile });

  if (!yamlFile) return "";

  return getYamlContent(owner, repoName, yamlFile.path);
};
