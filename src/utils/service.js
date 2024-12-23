import axios from "axios";
// let devUrl = import.meta.env.VITE_BASE_URL;
// let prodUrl = import.meta.env.VITE_GLOB_BASE_URL;
import cookie from '@/utils/cookie.js'
const service = axios.create({
	// baseURL: "",
	timeout: 5000
});


// const globalStore = GlobalStore();
service.interceptors.request.use(
	config => {
		 // JWT鉴权处理
		 if (cookie.getCookie('token')) {
			config.headers['token'] = cookie.getCookie('token')
		  }
		  return config
		// return config;
	},
	error => {
		return Promise.reject(error);
	}
);

service.interceptors.response.use(
	res => {
		return res;
	},
	error => {
		return Promise.reject(error);
	}
);

export default service;
