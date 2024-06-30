import { $http } from "./http";

export function loginApiService(username, password) {
  return new Promise(async (resolve, reject) => {
    const { data, status } = await $http.post({
      url: "/login",
      body: {
        username,
        password,
      },
    });
    if (status === 200) resolve(data);
    else reject(JSON.parse(data));
  });
}

export function logoutApiService(username) {
  return new Promise(async (resolve, reject) => {
    const { data, status } = await $http.post({
      url: "/logout",
      body: {
        username,
      },
    });
    if (status === 200) resolve(data);
    else reject(JSON.parse(data));
  });
}
