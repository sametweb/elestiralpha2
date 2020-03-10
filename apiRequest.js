import axios from "axios";

export const apiRequest = () => {
  return axios.create({
    baseURL: "https://elestirorg.appspot.com"
  });
};
