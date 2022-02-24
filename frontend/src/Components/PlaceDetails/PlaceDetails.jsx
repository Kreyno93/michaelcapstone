import {Box, Typography, Button, Card, CardMedia, CardContent, CardActions} from "@material-ui/core";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Rating from '@material-ui/lab/Rating';
import useStyles from "./styles";
import FavoriteIcon from '@mui/icons-material/Favorite';
import {pink} from "@mui/material/colors";
import {postFav} from "../../Services/ToBackendService";
import {Popover} from "@mui/material";
import {useState} from "react";

export default function PlaceDetails({place}) {

    const classes = useStyles();

    const addToFav = ({place}) =>  {
        console.log("Add To Fav : ",place)
        postFav({place,trackId:place.id})
            .then(console.log("After Axios", place))
            .catch(error => console.error(error))
    }

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
        addToFav({place});
    };

    const handleClose = () => {
        setAnchorEl(null);

    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

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
                <div>
                    <Button aria-describedby={id} variant="contained" onClick={handleClick}>
                        <FavoriteIcon sx={{ color: pink[500] }} />
                    </Button>
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                    >
                        <Typography sx={{ p: 2 }}>Added to Favorite</Typography>
                    </Popover>
                </div>
                {/*<Button onClick={() => addToFav(place)}><FavoriteIcon sx={{ color: pink[500] }} /> </Button>*/}
            </CardContent>
        </Card>
    )
}