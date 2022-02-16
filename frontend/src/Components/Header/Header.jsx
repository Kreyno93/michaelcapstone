import {Autocomplete} from "@react-google-maps/api";
import {Toolbar, Typography, InputBase, Box, AppBar} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./styles";
import LoginComponent from "../Login/LoginComponent";
import {useState} from "react";

export default function Header ({setCoordinates}) {
    const classes = useStyles();
    const [autoComplete, setAutoComplete] = useState(null);
    const onLoad= (autoC) => setAutoComplete(autoC)

    const onPlaceChanged = () => {
        const lat = autoComplete.getPlace().geometry.location.lat();
        const lng = autoComplete.getPlace().geometry.location.lng();
        setCoordinates({lat,lng})
    }
    return(
        <AppBar position={"static"}>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title}>
                    MTBitious
                </Typography>
                <Box display="flex">
                    <Typography variant="h6" className={classes.title}>
                        New Places
                    </Typography>
                    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon/>
                            </div>
                            <InputBase placeholder="Search..." classes={{root: classes.inputRoot, input: classes.inputInput}}></InputBase>
                        </div>
                    </Autocomplete>
                </Box>
                <Box>
                    <LoginComponent/>
                </Box>
            </Toolbar>
        </AppBar>
    )
}