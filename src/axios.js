import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:500/amazon-clone/us-central1/api1' //The API (Cloud function URL e.g "http://localhost:500/amazon-clone/us-central1/api1")
})

export default instance