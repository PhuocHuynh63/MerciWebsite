import { https } from "./config"

export const merci = {
    getProducts: () => {
        return https.get('/Products');
    },

    getProductDetail: (slug) => {
        return https.get(`/Products/slug/${slug}`);
    },

    getProductDetailId: (id) => {
        return https.get(`/Products/id=${id}`);
    },

    getProductsByCategory: (categoryId) => {
        return https.get(`/Categories/${categoryId}`);
    },

    getCombo: () => {
        return https.get('/Combos');
    },

    getComboDetail: (slug) => {
        return https.get(`/Combos/${slug}`);
    },

    postRegister: (data) => {
        return https.post('/Auth/Register', data);
    },

    postOrder: (data) => {
        return https.post('/Orders', data);
    },

    getUserById: (id) => {
        return https.get(`/Users/${id}`);
    },
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
