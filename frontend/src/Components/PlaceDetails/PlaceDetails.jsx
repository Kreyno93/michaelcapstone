import {Box, Typography, Button, Card, CardMedia, CardContent, CardActions} from "@material-ui/core";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Rating from '@material-ui/lab/Rating';
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
                <Box display="flex" flex-direction="column" justifyContent="space-between">
                    <Rating value={Number(place.rating)} readOnly/>
                    <Typography gutterBottom variant="subtitle1"></Typography>
                </Box>
                <Box display="flex" flex-direction="column" justifyContent="space-between">
                    <Typography variant="subtitle1">Description <br/> {place.description} </Typography>
                </Box>
                <br/>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Ranking</Typography>
                    <Typography gutterBottom variant="subtitle1">{place.rating}</Typography>
                </Box>
                {place?.region &&(
                    <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.subtitle}>
                        <LocationOnIcon /> {place.city}, {place.region}
                    </Typography>
                    )}
                <CardActions>
                    <Button size="small" color="primary" onClick={() => window.open(place.url, "blank")}>
                        Website
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}