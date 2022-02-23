import {Grid, Typography} from "@material-ui/core"
import useStyles from "./styles"
import PlaceDetails from "../PlaceDetails/PlaceDetails";


const List = ({places}) => {

    const classes = useStyles();


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