import https from "./config"

export const merci = {

}

export const addressVietNam = {
    getProvinces: async () => {
        const response = await https.get('https://vapi.vnappmob.com/api/province/');
        return response.data;
    },
    getDistricts: async (provinceId) => {
        const response = await https.get(`https://vapi.vnappmob.com/api/province/district/${provinceId}`);
        return response.data;
    },
    getWards: async (districtId) => {
        const response = await https.get(`https://vapi.vnappmob.com/api/province/ward/${districtId}`);
        return response.data;
    }
}
