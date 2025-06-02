import { isDev } from "./is-dev";

export const host = isDev
  ? "http://localhost:4444"
  : "https://igorandvalentina.com:4444";
