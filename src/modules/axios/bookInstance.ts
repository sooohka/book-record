import axios from "axios";

import config from "config";

const axiosBookInstance = axios.create({
  baseURL: `${config.api.base}`,
});

export default axiosBookInstance;
