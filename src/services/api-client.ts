import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "d63d4bcaaed3416983e1c5e2c82b9549"
    }
})