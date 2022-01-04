import axios from "axios";

const API_URL = 'http://localhost:8080'

export function post(endpoint, data = {}, headers = {}) {
    const config = {
        headers: {
            ...headers,
        }
    }

    return axios.post(API_URL + endpoint, data, config)
}

export function del(endpoint, data = {}, headers = {}) {
    const config = {
        headers: {
            ...headers,
        },
        data: data
    }
    return axios.delete(API_URL + endpoint, config)
}
