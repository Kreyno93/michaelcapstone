import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function LoginComponent() {
 return(
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="usernameform" label="Username" variant="filled" />
            <TextField id="passwordform" label="Password" variant="filled" />
        </Box>
    );
}