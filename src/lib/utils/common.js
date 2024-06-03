import filter from "lodash/filter";
import every from "lodash/every";
import isNil from "lodash/isNil";
import dayjs from "dayjs";

export const voidFunction = () => {
  //this function is used to set as default value of any function variable
};

export const isInvalid = (value) => isNil(value) || value === "";

export const removeInvalidObjects = (arr, keys) => {
  if (!arr?.length) return [];
  return filter(arr, (obj) => {
    return every(keys, (key) => !isInvalid(obj[key]));
  });
};

export const formatDate = (date, format = "MMMM D, YYYY") => {
  return date ? dayjs(date).format(format) : "";
};

// create a function to updated the query params
export const updateQueryParams = (params) => {
  const url = new URL(window.location.href);

  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.set(key, value);
  });

  return url;
};
