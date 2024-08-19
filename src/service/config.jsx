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

export const https = axios.create({
    baseURL: BASE_URL,
    headers: configHeader(),
})