import { client } from "../appwrite";

export const get = async (path, params) => {
  return await client.request("GET", path, params);
};
