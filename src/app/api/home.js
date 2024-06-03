import axios from "./axios";
import { URL } from "@/constants/url";

export const fetchHomeData = async () => {
  const response = await axios.get(URL.Home);
  return response.data;
};
