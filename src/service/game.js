import { $http } from "./http";

export function getListOfGamesApiService() {
  return new Promise(async (resolve, reject) => {
    const { data, status } = await $http.get({
      url: "/games",
    });
    if (status === 200) resolve(data);
    else reject(JSON.parse(data));
  });
}

export function getListOfCategoriesApiService() {
  return new Promise(async (resolve, reject) => {
    const { data, status } = await $http.get({
      url: "/categories",
    });
    if (status === 200) resolve(data);
    else reject(JSON.parse(data));
  });
}
