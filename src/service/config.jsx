import axios from "axios";
import { localService } from "./localService";

export const BASE_URL = "http://14.225.253.116:8081";


const TokenApp = "";


export const configHeader = () => {
    return {
        TokenApp: TokenApp,
        Authorization: "Bearer " + localService.get()?.accessToken,
        // ? là optional chaining
    }
}

const https = axios.create({
    baseURL: BASE_URL,
    headers: configHeader(),
})


// Add a request interceptor
https.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
https.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response && response.data ? response.data : response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return error && error.response && error.response.data ? error.response.data : Promise.reject(error);
});

export default https;