import {Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip} from "@material-ui/core";
import LocationIcon from "@material-ui/icons/LocationOn"
import PhoneIcon from "@material-ui/icons/Phone"
import Rating from "@material-ui/lab/Rating"

import useStyles from "./styles"

export default function PlaceDetails({place}) {

    const classes = useStyles();

    return (
        <Card elevation = {6}>
            <CardMedia
            style = {{height: 350}}
            image={place.thumbnail ? place.thumbnail:"https://www.ridemorebikes.com/wp-content/uploads/2011/07/whistler-bike-park-bline.jpg"}
            title={place.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5">{place.name}</Typography>
            </CardContent>
        </Card>
    )
}