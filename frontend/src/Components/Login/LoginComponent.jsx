import * as React from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {postLogin, TOKEN_STORAGE_KEY} from "../../Services/ToBackendService";


export default function LoginComponent() {

    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false)


    const login = () => {
        const login = {name: userName, password: userPassword}
        postLogin(login)
            .then(response => localStorage.setItem(TOKEN_STORAGE_KEY, response.data))
            .catch(error => console.error(error))
        setIsLoggedIn(true)
    }

    return (
        isLoggedIn ? (
                <div className="isLoggedIn">
                    <h1>Hello <a href="/profilepage">{userName}</a></h1>
                </div>
            ) :
            <div className="login">
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': {m: 1, width: '25ch'},
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="usernameform" label="Username" variant="filled" value={userName}
                               onChange={(e) => setUserName(e.target.value)}/>
                    <TextField id="passwordform" label="Password" variant="filled" value={userPassword} type="password"
                               onChange={(e) => setUserPassword(e.target.value)}/>
                </Box>
                <Stack>
                    <Button variant="text" onClick={() => login()}>Login</Button>
                </Stack>
            </div>
    )
}