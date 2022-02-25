import {Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@material-ui/core";
import useStyles from "../List/styles";
import "./style.scss"
import Rating from "@material-ui/lab/Rating";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {pink} from "@mui/material/colors";
import {useEffect, useState} from "react";
import HomeIcon from '@mui/icons-material/Home';
import {addRating, getFavList} from "../../Services/ToBackendService";

export default function ProfilePage() {

    const classes = useStyles();
    const [userList, setUserList] = useState([])
    const [value, setValue] = useState(0)

    useEffect(() => {

        getFavList()
            .then(userList => {
                setUserList(userList)
                console.log("Liste vom User : ", userList)
            })
    }, [])


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
                        {userList.map((userListItem, i) => (
                            <Card elevation={6} key={i}>
                                <CardMedia
                                    style={{height: 350}}
                                    image={userListItem.place.thumbnail ? userListItem.place.thumbnail : "https://www.ridemorebikes.com/wp-content/uploads/2011/07/whistler-bike-park-bline.jpg"}
                                    title={userListItem.place.name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5">{userListItem.place.name}</Typography>
                                    <Box
                                        sx={{
                                            '& > legend': {mt: 2},
                                        }}
                                    >
                                        <Typography component="legend">Rating</Typography>
                                        <Rating
                                            name="simple-controlled"
                                            value={userListItem.rating}
                                            onChange={(event, newValue) => {
                                                addRating({trackId: userListItem.place.id, rating: newValue})
                                            }}
                                        />
                                    </Box>
                                    <br/>
                                    <Box display="flex" flex-direction="column" justifyContent="space-between">
                                        <Typography
                                            variant="subtitle1">Description <br/>{userListItem.place.description}
                                        </Typography>
                                    </Box>
                                    <br/>
                                    <Box display="flex" flex-direction="column" justifyContent="space-between">
                                        <Typography variant="subtitle1">Direction <br/>{userListItem.place.direction}
                                        </Typography>
                                    </Box>
                                    <br/>
                                    <Box display="flex" justifyContent="space-between">
                                        <Typography variant="subtitle1">Difficulty
                                            : {userListItem.place.difficulty}</Typography>
                                        <Typography gutterBottom variant="subtitle1">5</Typography>
                                    </Box>
                                    <Typography gutterBottom variant="subtitle2" color="textSecondary"
                                                className={classes.subtitle}>
                                        <LocationOnIcon/> {userListItem.place.region}, {userListItem.place.city}
                                    </Typography>
                                    <CardActions>
                                        <Button size="small" color="primary"
                                                onClick={() => window.open(userListItem.place.url, "blank")}>
                                            Website
                                        </Button>
                                    </CardActions>
                                    <Button><FavoriteIcon sx={{color: pink[500]}}/> </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </Grid>
                </Grid>
            </div>
        </>
    )
}