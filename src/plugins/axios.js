import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

const axiosInstance = axios.create();

export const setBaseURL = (url) => {
    axiosInstance.defaults.baseURL = url;
}

setBaseURL(process.env.VUE_APP_BASE_API_LINK);

Vue.use(VueAxios, axiosInstance);

export default axiosInstance;