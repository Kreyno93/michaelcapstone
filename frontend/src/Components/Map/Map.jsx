import GoogleMapReact from 'google-map-react';
import {Paper, Typography, useMediaQuery} from "@mui/material";
import LocationOnOutLinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";
import useStyles from "./styles";
import mapStyles from "./mapStyles"


export default function Map({setCoordinates, coordinates, places}) {

    const classes = useStyles();

    const AnyReactComponent = ({placeThumbnail,placeName,placeRating}) =>
        <div>
            <LocationOnOutLinedIcon color="primary" fontSize="large"/>
            <Paper elevation={3} className={classes.paper}>
                <Typography className={classes.typography} variant="subtitle2" gutterBottom>
                    {placeName}
                </Typography>
                <img className={classes.pointer}
                     src={placeThumbnail ? placeThumbnail : "https://www.ridemorebikes.com/wp-content/uploads/2011/07/whistler-bike-park-bline.jpg"}
                     alt={placeName}/>
                <Rating size="small" value={Number(placeRating)} readOnly/>
            </Paper>
        </div>


        return (
            <div className={classes.mapContainer}>
                <GoogleMapReact
                    bootstrapURLKeys={{key: "AIzaSyBrFhIje5bWMTdQ-hdKkgxuGCuAeIebthE"}}
                    defaultCenter={{lat:49.30619240029662, lng: 10.557889121921962}}
                    center={coordinates}
                    defaultZoom={14}
                    margin={[50, 50, 50, 50]}
                    options={{disableDefaultUI: true, zoomControl: true, styles: mapStyles}}
                    onChange={(e) => {
                        console.log(e)
                        setCoordinates({lat: e.center.lat, lon: e.center.lng})
                    }}
                >
                    {places?.map((place, i) => (
                        <AnyReactComponent
                            lat={Number(place.lat)}
                            lng={Number(place.lon)}
                            key={i}
                            placeThumbnail={place.thumbnail}
                            placeName = {place.name}
                            placeRating = {place.rating}
                        />
                    ))}
                </GoogleMapReact>
            </div>
        );
    }