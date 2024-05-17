import { LanguageKeys } from "@/constants";

const port = process.env.PORT || 3000;
const host = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${port}`;

const defaultLocale = "en";

const pathnames = {
  "/": "/",
  "/info/about": "/info/about",
};

const localePrefix = "never";

const AppPathnames = Object.keys(pathnames);

module.exports = {
  port,
  host,
  defaultLocale,
  locales: LanguageKeys,
  pathnames,
  localePrefix,
  AppPathnames,
};
