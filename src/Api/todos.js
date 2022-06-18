import axios from "axios";

const instance = axios.create({
    baseURL: 'https://react-course-65b16-default-rtdb.firebaseio.com',
    timeout: 5000
})

instance.interceptors.request.use(function (config) {
    return config;
}, function (err) {
    return Promise.reject(err);
})

instance.interceptors.response.use(function (response) {
    return response;
}, function (err) {
    return Promise.reject(err);
})

export default instance;