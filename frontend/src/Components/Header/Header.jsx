import {AppBar, Box, Toolbar, Typography} from "@material-ui/core";
import useStyles from "./styles";
import LoginComponent from "../Login/LoginComponent";

export default function Header() {

    const classes = useStyles();

    return (
        <AppBar position={"static"}>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title}>
                    MTBitious
                </Typography>
                <Box display="flex">
                </Box>
                <Box>
                    <LoginComponent/>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

