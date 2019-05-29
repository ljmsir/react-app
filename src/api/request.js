import axios from 'axios';
import {Message} from 'antd';

const services = axios.create({
    baseURL: 'http://192.168.10.79:9200/product-server/',
    timeout: 5000 
})

services.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        Promise.reject(error);
    }
);

services.interceptors.response.use(
    response => {
        const dataAxios = response.data
        // 这个状态码是和后端约定的
        const { code } = dataAxios
        // 根据 code 进行判断
        if (code === undefined) {
        // 如果没有 code 代表这不是项目后端开发的接口 比如可能是 D2Admin 请求最新版本
            return dataAxios;
        } else {
        // 有 code 代表这是一个后端接口 可以进行进一步的判断
            switch (code) {
                case 'BASE_000000':
                    return dataAxios;
                case 'J000000':
                    return dataAxios;
                case 'AUTH_000001':
                    Message.warning(dataAxios.message);
                    break;
                default:
                    Message.warning(dataAxios.message);
                    break
            }
        }
    },
    error => {
        if (error && error.response) {
            switch (error.response.status) {
                case 400: error.message = '请求错误'; break
                case 401: error.message = '未授权，请登录'; break
                case 403: error.message = '拒绝访问'; break
                case 404: error.message = `请求地址出错`; break
                case 408: error.message = '请求超时'; break
                case 500: error.message = '服务器内部错误'; break
                case 501: error.message = '服务未实现'; break
                case 502: error.message = '网关错误'; break
                case 503: error.message = '服务不可用'; break
                case 504: error.message = '网关超时'; break
                case 505: error.message = 'HTTP版本不受支持'; break
                default: break
            }
        }
        return Promise.reject(error);
    }
);

export default services;

