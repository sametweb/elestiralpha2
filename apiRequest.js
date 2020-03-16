import axios from "axios";

const apiRequest = token => {
  return axios.create({
    baseURL: "https://elestirorg.appspot.com",
    headers: {
      AuthToken: token || ""
    }
  });
};

export default apiRequest;
