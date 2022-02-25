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
                    {/*<Typography variant="h6" className={classes.title}>*/}
                    {/*    New Places*/}
                    {/*</Typography>*/}
                    {/*    <div className={classes.search}>*/}
                    {/*        <div className={classes.searchIcon}>*/}
                    {/*            <SearchIcon/>*/}
                    {/*        </div>*/}
                    {/*        <InputBase placeholder="Search..." classes={{root: classes.inputRoot, input: classes.inputInput}}></InputBase>*/}
                    {/*    </div>*/}
                </Box>
                <Box>
                    <LoginComponent/>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

