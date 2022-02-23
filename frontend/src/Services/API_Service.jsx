import axios from "axios";

const URL = "https://trailapi-trailapi.p.rapidapi.com/trails/explore/"


export const getPlacesData = async (lat,lon) => {
    try {
        const {data: {data}} = await axios.get(URL,{

            params: {lat, lon},
            headers: {
                'x-rapidapi-host': 'trailapi-trailapi.p.rapidapi.com',
                'x-rapidapi-key': "9f0c9071f5msh93a5e5a214720f8p114823jsn40a80d6e19b5"
            }
        });
        return data;
    }catch(error){
        console.log(error)
    }
}