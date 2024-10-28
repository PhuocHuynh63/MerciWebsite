import axios from "axios";
import { localService } from "./localService";

// export const BASE_URL = "http://localhost:5209/api/";
export const BASE_URL = "https://merci.azurewebsites.net/api";


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