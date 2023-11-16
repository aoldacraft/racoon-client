import axios, { AxiosRequestConfig } from "axios";

const axiosConfig: AxiosRequestConfig = {
  baseURL: "https://racoon.aolda.net/api",
};

const instance = axios.create(axiosConfig);

export default instance;
