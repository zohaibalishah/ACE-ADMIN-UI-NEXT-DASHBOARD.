import Axios from 'axios';

function authRequestInterceptor(config) {
    if (config.headers) {
        config.headers.Accept = 'application/json';
    }
    return config;
}

const api = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL + '/api/admin/',
});

api.interceptors.request.use(authRequestInterceptor);
api.interceptors.response.use(
    response => {
        return response;
    },
    async error => {
        const status = error.response?.status;
        const message =
            error.response?.data?.message ||
            error.message ||  'Something went wrong';
        return Promise.reject({
            status: status,
            message,
        });
    }
);
export default api;
