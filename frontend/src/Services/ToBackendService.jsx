import axios from "axios";

export const TOKEN_STORAGE_KEY = 'MY_TOKEN';
const config = {headers: {'Authorization': 'Bearer ' + localStorage.getItem(TOKEN_STORAGE_KEY) || ""}}

export const postLogin = (login) => axios.post("/auth/login", login)

export const postFav = (trackId) => axios.post("/api/fav",trackId, config )


