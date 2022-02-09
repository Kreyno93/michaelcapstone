import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function LoginComponent() {
    return (
        <div>
        <Box
            component="form"
            sx={{
                '& > :not(style)': {m: 1, width: '25ch'},
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="usernameform" label="Username" variant="filled"/>
            <TextField id="passwordform" label="Password" variant="filled"/>
            <Stack spacing={2} direction="row">
                <Button variant="text">Login</Button>
            </Stack>
        </Box>

        </div>
)
}