import axios from "axios";

export const api = axios.create({

    baseURL: "https://api.themoviedb.org/3",
    headers: {
        Authorization: "Bearer [bebdab96fb21b739942d1a592853f3e]"
    }
})


