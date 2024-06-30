import { makeUnifiedNetwork } from "unified-network";

export const $http = makeUnifiedNetwork({
  baseUrl: "http://localhost:3001",
});
