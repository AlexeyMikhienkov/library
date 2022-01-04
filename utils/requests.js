import axios from "axios";

const API_URL = 'http://localhost:8080'

export default function post(endpoint, data = {}, headers = {}) {
    const config = {
        headers: {
            ...headers,
        }
    }

    return axios.post(API_URL + endpoint, data, config)
}