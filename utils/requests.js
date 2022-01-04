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
        data
    }

    return axios.delete(API_URL + endpoint, config)
}

export function getWithParams(endpoint, params = {}, headers = {}) {
    const config = {
        headers: {
            ...headers,
        },
        params
    }

    return axios.get(API_URL + endpoint, config)
}

export function get(endpoint, data = {}, headers = {}) {
    const config = {
        headers: {
            ...headers,
        },
        data
    }

    return axios.get(API_URL + endpoint, config)
}

