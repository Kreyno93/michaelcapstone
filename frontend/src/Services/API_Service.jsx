import axios from "axios";

const URL = "https://trailapi-trailapi.p.rapidapi.com/trails/explore/"


export const getPlacesData = async () => {
    try {
        const {data: {data}} = await axios.get(URL,{

            // params: {lat: coordinates.lat, lon: coordinates.lng},
            params: {lat: '40.058629', lon: '-82.650012'},
            headers: {
                'x-rapidapi-host': 'trailapi-trailapi.p.rapidapi.com',
                'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_TRAILAPI_KEY
            }
        });
        return data;
    }catch(error){
        console.log(error)
    }
}