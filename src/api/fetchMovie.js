import {API_MOVIES_URL, API_KEY, POSTER_URL} from '../util/constants'
import axios from "axios"


export default axios.create({
    baseURL: API_MOVIES_URL,
    headers:{
        Accept: "application/json"
    },
    params: {
        api_key: API_KEY,
        language: 'es-MX',
        video: true
    }
})