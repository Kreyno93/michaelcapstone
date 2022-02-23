import {Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@material-ui/core";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
import useStyles from "../List/styles";
import "./style.scss"
import Rating from "@material-ui/lab/Rating";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {pink} from "@mui/material/colors";
import {useState} from "react";
import HomeIcon from '@mui/icons-material/Home';

export default function ProfilePage(places) {

    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [value2, setValue2] = useState(3);
    const [value3, setValue3] = useState(4);
    const lorem = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."

    return (
        <>
            <div className="Header">
                <h1>Welcome TestUser</h1>
                <Box
                    sx={{
                        '& > :not(style)': {
                            m: 3,
                        },
                    }}
                >
                    <a href={"/"}>
                        <HomeIcon sx={{fontSize: "50px"}}/>
                    </a>
                </Box>
            </div>
            <div className={classes.container}>
                <Typography variant="h4">Your Favourites</Typography>
                <Grid container spacing={3} className={classes.list}>
                    <Grid item xs={6} md={6}>
                        <Card elevation={6}>
                            <CardMedia
                                style={{height: 350}}
                                image={"https://images.singletracks.com/blog/wp-content/uploads/2019/04/IMG_3554-orig-scaled.jpg"}
                                title="Bikepark Hochberg"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">Bikepark Hochberg</Typography>
                                <Box
                                    sx={{
                                        '& > legend': {mt: 2},
                                    }}
                                >
                                    <Typography component="legend">Rating</Typography>
                                    <Rating
                                        name="simple-controlled"
                                        value={value}
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }}
                                    />
                                </Box>
                                <br/>
                                <Box display="flex" flex-direction="column" justifyContent="space-between">
                                    <Typography variant="subtitle1">Description <br/>"Small bikepark serviced by a T-bar lift.  The park is open 7 days a week if you want to pedal up and ride down the trails, lift Service is only on Sundays.  Check out the Website http://www.bikepark-hochberg.de/index.htm"</Typography>
                                </Box>
                                <br/>
                                <Box display="flex" flex-direction="column" justifyContent="space-between">
                                    <Typography variant="subtitle1">Direction <br/>"From the City Center of Heidenheim drive West on Highway 466, turn left onto Steinheimer Str., then another left onto Stubental Str. and follow for about 500m there will be parking lot on the left."</Typography>
                                </Box>
                                <br/>
                                <Box display="flex" justifyContent="space-between">
                                    <Typography variant="subtitle1">Difficulty : Advanced</Typography>
                                    <Typography gutterBottom variant="subtitle1">5</Typography>
                                </Box>
                                <Typography gutterBottom variant="subtitle2" color="textSecondary"
                                            className={classes.subtitle}>
                                    <LocationOnIcon/> Heidenheim, Germany
                                </Typography>
                                <CardActions>
                                    <Button size="small" color="primary"
                                            onClick={() => window.open("google.de", "blank")}>
                                        Website
                                    </Button>
                                </CardActions>
                                <Button><FavoriteIcon sx={{color: pink[500]}}/> </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={2} md={6}>
                        <Card elevation={6}>
                            <CardMedia
                                style={{height: 350}}
                                image={"https://www.ridemorebikes.com/wp-content/uploads/2011/07/whistler-bike-park-bline.jpg"}
                                title="Bikepark XXL"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">Bikepark XXL</Typography>
                                <Box
                                    sx={{
                                        '& > legend': {mt: 2},
                                    }}
                                >
                                    <Typography component="legend">Rating</Typography>
                                    <Rating
                                        name="simple-controlled"
                                        value={value2}
                                        onChange={(event2, newValue2) => {
                                            setValue2(newValue2);
                                        }}
                                    />
                                </Box>
                                <br/>
                                <Box display="flex" flex-direction="column" justifyContent="space-between">
                                    <Typography variant="subtitle1">Description <br/>{lorem}</Typography>
                                </Box>
                                <br/>
                                <Box display="flex" flex-direction="column" justifyContent="space-between">
                                    <Typography variant="subtitle1">Direction <br/>{lorem}</Typography>
                                </Box>
                                <br/>
                                <Box display="flex" justifyContent="space-between">
                                    <Typography variant="subtitle1">Difficulty : Hard</Typography>
                                    <Typography gutterBottom variant="subtitle1">5</Typography>
                                </Box>
                                <Typography gutterBottom variant="subtitle2" color="textSecondary"
                                            className={classes.subtitle}>
                                    <LocationOnIcon/> Chorweiler, Köln
                                </Typography>
                                <CardActions>
                                    <Button size="small" color="primary"
                                            onClick={() => window.open("google.de", "blank")}>
                                        Website
                                    </Button>
                                </CardActions>
                                <Button><FavoriteIcon sx={{color: pink[500]}}/> </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={2} md={6}>
                        <Card elevation={6}>
                            <CardMedia
                                style={{height: 350}}
                                image={"https://www.ridemorebikes.com/wp-content/uploads/2011/07/whistler-bike-park-bline.jpg"}
                                title="Bikepark XXL"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">Bikepark XXL</Typography>
                                <Box
                                    sx={{
                                        '& > legend': {mt: 2},
                                    }}
                                >
                                    <Typography component="legend">Rating</Typography>
                                    <Rating
                                        name="simple-controlled"
                                        value={value3}
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }}
                                    />
                                </Box>
                                <br/>
                                <Box display="flex" flex-direction="column" justifyContent="space-between">
                                    <Typography variant="subtitle1">Description <br/>{lorem}</Typography>
                                </Box>
                                <br/>
                                <Box display="flex" flex-direction="column" justifyContent="space-between">
                                    <Typography variant="subtitle1">Direction <br/>{lorem}</Typography>
                                </Box>
                                <br/>
                                <Box display="flex" justifyContent="space-between">
                                    <Typography variant="subtitle1">Difficulty : Hard</Typography>
                                    <Typography gutterBottom variant="subtitle1">5</Typography>
                                </Box>
                                <Typography gutterBottom variant="subtitle2" color="textSecondary"
                                            className={classes.subtitle}>
                                    <LocationOnIcon/> Chorweiler, Köln
                                </Typography>
                                <CardActions>
                                    <Button size="small" color="primary"
                                            onClick={() => window.open("google.de", "blank")}>
                                        Website
                                    </Button>
                                </CardActions>
                                <Button><FavoriteIcon sx={{color: pink[500]}}/> </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}