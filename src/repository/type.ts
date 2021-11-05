export type Repository = {
  name: any;
  size: any;
  owner: any;
};

export type Content = {
  privateOrPublic: string;
  files: number;
  ymlContent: string;
  activeWebhooks: string;
};

export type RepositoryContent = Repository & Content;
