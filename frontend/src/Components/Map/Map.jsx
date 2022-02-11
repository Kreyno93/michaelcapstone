import React from "react";

import GoogleMapReact from 'google-map-react';
import {Paper, Typography,useMediaQuery} from "@mui/material";
import LocationOnOutLinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab";
import useStyles from "./styles";

export default function Map({setCoordinates, setBounds,coordinates}){

    const classes = useStyles();

    const isMobile = useMediaQuery("(min-width:600px)");

    // const coordinates = {lat :39.396938, lng : -88.853314 }

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={8}
                margin={[50,50,50,50]}
                options={""}
                onChange={(e) =>{
                    console.log(e)
                    setCoordinates({lat: e.center.lat,lng: e.center.lng})
                    setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
                } }
                // onChildClick={}
            >
            </GoogleMapReact>
        </div>
    );
}