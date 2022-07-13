import axios, { AxiosRequestConfig } from "axios";

const interceptor:() => void = () => {
    axios.interceptors.request.use((request: AxiosRequestConfig) => {
        console.log('request ='+request.url);
        return request;
    })
}

export default interceptor;