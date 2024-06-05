import axios from 'axios';

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
    params: {
        api_key: "91685e9902f30c2e222be66ec50c8a97"
        language: "ko-KR"
    }
})

export default instance;