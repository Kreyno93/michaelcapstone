import {CssBaseline, Grid} from "@material-ui/core";
import Header from "../Header/Header";
import List from "../List/List";
import Map from "../Map/Map";
import React, {useEffect, useState} from "react";
import {getPlacesData} from "../../Services/API_Service";

export default function MainPage() {


    const [places, setPlaces] = useState([])

    const [coordinates, setCoordinates] = useState({})

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
            setCoordinates({lat: latitude, lng: longitude});
        })
    }, []);

    useEffect(() => {

        getPlacesData(coordinates.lat, coordinates.lon)
            .then((data) => {
                setPlaces(data)
                console.log("Orte in deiner Nähe", data)
            })
    }, [coordinates])
    return (

        <>
            <CssBaseline/>
            <Header setCoordinates={setCoordinates}/>
            <Grid container spacing={3} style={{width: "100%"}}>
                <Grid item xs={12} md={4}>
                    <List places={places}/>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map
                        setCoordinates={setCoordinates}
                        coordinates={coordinates}
                        places={places}
                    />
                </Grid>
            </Grid>
        </>
    )
}