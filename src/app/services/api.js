import axios from "axios";

const API_ROOT = "http://pb-api.herokuapp.com";

export const getBarsApi = () => {
  return axios
    .get(`${API_ROOT}/bars`)
    .then(resp => parseResponse(resp))
    .catch(err => parseErr(err));
};

const ERR_MESS = `there's something wrong`;

const parseResponse = resp => {
  const { statusText, status, data } = resp;
  if (status === 200) {
    return { data };
  } else {
    return {
      errMess: statusText || ERR_MESS
    };
  }
};

const parseErr = err => {
  const { response } = err;
  if (response) {
    const { data } = response;
    if (data && data.message) {
      return { errMess: data.message };
    }
    return { errMess: ERR_MESS };
  }
  return { errMess: ERR_MESS };
};
