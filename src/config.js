import {
  LANGUAGE_KEYS,
  PATH_NAMES,
  DEFAULT_LOCALE,
  LOCALE_PREFIX,
} from "@/constants";

const port = process.env.PORT || 3000;
const host = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${port}`;

const AppPathnames = Object.keys(PATH_NAMES);

module.exports = {
  port,
  host,
  defaultLocale: DEFAULT_LOCALE,
  locales: LANGUAGE_KEYS,
  pathnames: PATH_NAMES,
  localePrefix: LOCALE_PREFIX,
  AppPathnames,
};
