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
        <div className = {classes.Container}>
            <Typography variant="h4">Trails and Parks Around You</Typography>
            <FormControl className={classes.formControl}>
                {/*<InputLabel>Type</InputLabel>*/}
                {/*<Select value = {type} onChange={(e) => setType(e.target.value)}>*/}
                {/*    <MenuItem value ="">Trails</MenuItem>*/}
                {/*    <MenuItem value ="">Parks</MenuItem>*/}
                {/*</Select>*/}
            </FormControl>
            <FormControl className={classes.formControl}>
                {/*<InputLabel>Rating</InputLabel>*/}
                {/*<Select value = {rating} onChange={(e) => setRating(e.target.value)}>*/}
                {/*    <MenuItem value ={0}>All</MenuItem>*/}
                {/*    <MenuItem value ={3}>Above 3.0</MenuItem>*/}
                {/*    <MenuItem value ={4}>Above 4.0</MenuItem>*/}
                {/*    <MenuItem value ={4.5}>Above 4.5</MenuItem>*/}
                {/*</Select>*/}
            </FormControl>
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