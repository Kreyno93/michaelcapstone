import React from "react";
// @ts-ignore
import GoogleMapReact from 'google-map-react';

// @ts-ignore
const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function GoogleMapComp(){
    const defaultProps = {
        center: {
            lat: 51.033749,
            lng: 6.987290
        },
        zoom: 11
    };

    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>
    );
}