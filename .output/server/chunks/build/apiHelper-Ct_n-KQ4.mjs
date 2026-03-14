import axios from 'axios';

const defaultBaseURL = process.env.NUXT_PUBLIC_API_BASE_URL || "http://localhost:3000/api";
const apiClient = axios.create({
  baseURL: defaultBaseURL,
  timeout: 1e4,
  headers: {
    "Content-Type": "application/json"
  }
});
async function apiHelper(requestFn) {
  var _a, _b;
  try {
    const response = await requestFn();
    return response;
  } catch (error) {
    const err = error;
    console.error(
      "API \uC694\uCCAD \uC5D0\uB7EC:",
      (_a = err.response) == null ? void 0 : _a.status,
      ((_b = err.response) == null ? void 0 : _b.data) || err.message || err.request
    );
    return null;
  }
}

export { apiHelper as a, apiClient as b };
//# sourceMappingURL=apiHelper-Ct_n-KQ4.mjs.map
