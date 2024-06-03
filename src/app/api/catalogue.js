import axios from "./axios";
import { URL } from "@/constants/url";

export const fetchCatalogueData = async (params = {}) => {
  const response = await axios.get(URL.Catalogue.Data, { params });
  return response.data;
};

export const fetchCatalogueMetaData = async (params = {}) => {
  const response = await axios.get(URL.Catalogue.MetaData, { params });
  return response.data;
};

export const fetchCatalogueFilters = async (params = {}) => {
  const response = await axios.get(URL.Catalogue.Filters, { params });
  return response.data;
};
