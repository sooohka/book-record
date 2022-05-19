import axios from "axios";

import config from "config";

/* //TODO:cors 해결 필요 */
const axiosBookInstance = axios.create({
  // baseURL: `${config.api.base}/v1`,
  headers: {
    "X-Naver-Client-Id": config.client.id,
    "X-Naver-Client-Secret": config.client.secret,
  },
});

export default axiosBookInstance;
