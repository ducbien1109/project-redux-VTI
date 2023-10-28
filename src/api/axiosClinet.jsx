import axios from "axios";

const instance = axios.create({
  baseURL: "https://652e9af20b8d8ddac0b1aaee.mockapi.io/", // base url
  timeout: 5000, // thời gian hết hạn call api
  headers: {
    "Content-Type": "application/json", // biểu thị rẳng body truyền lên và response trả về là dạng JSON
  },
});

//JWT, interceptor: để sau

export default instance;
