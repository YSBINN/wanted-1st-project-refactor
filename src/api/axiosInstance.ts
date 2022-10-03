import axios, { AxiosInstance } from 'axios';

export default class axiosInstance {
    protected axios: AxiosInstance;

    constructor(baseUrl: BASE_URL) {
        this.axios = axios.create({
            baseURL: baseUrl,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });
    }
}

export type BASE_URL = string | undefined;
