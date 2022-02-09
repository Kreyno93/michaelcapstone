import React from "react";

import GoogleMapReact from 'google-map-react';
import {Paper, Typography,useMediaQuery} from "@mui/material";
import LocationOnOutLinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab";
import useStyles from "./styles";

export default function Map(){

    const classes = useStyles();

    const isMobile = useMediaQuery("(min-width:600px)");

    const coordinates = {lat :59.955413, lng : 30.337844 }

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50,50,50,50]}
                options={""}
                onChange={""}
                onChildClick={""}
            >
            </GoogleMapReact>
        </div>
    );
}