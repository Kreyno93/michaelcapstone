import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select} from "@material-ui/core"
import useStyles from "./styles"
import {useState} from "react";
import PlaceDetails from "../PlaceDetails/PlaceDetails";


const List = ({places}) => {

    const classes = useStyles();
    const [type, setType] = useState("");
    const [rating, setRating] = useState("")
    // const places = [
    //     {name: "TestPlace1"},
    //     {name: "TestPlace2"},
    //     {name: "TestPlace3"},
    //     {name: "TestPlace4"},
    // ]


    return(
        <div className = {classes.container}>
            <Typography variant="h4">Trails and Parks Around You</Typography>
            <Grid container spacing={3} className={classes.list}>
                {places?.map((place,i) => (
                    <Grid item key={i} xs={12}>
                        <PlaceDetails place={place} />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default List;