import axios from "axios";

export const TOKEN_STORAGE_KEY = 'MY_TOKEN';

const config = {headers: {'Authorization': 'Bearer ' + localStorage.getItem(TOKEN_STORAGE_KEY) || ""}}

export const postLogin = (login) => axios.post("/auth/login", login)

export const postFav = ({place}) => axios.post("/api/fav", {place}, config)

export const getFavList = ()  => axios.get("/api/get/fav",config).then(response => response.data)

export const addRating = ({trackId,rating}) => axios.post("/api/get/fav/rating", {trackId,rating},config)