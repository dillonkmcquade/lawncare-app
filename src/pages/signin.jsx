import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
function SignIn(setSignedIn) {
    const ariaLabel = { 'aria-label': 'description' };
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '500px',
            height: '500px',
            border: 'solid 10px black',
            bgcolor: 'white',
            padding: '20px',
            borderRadius: '5px',
            marginTop: '60px'
        }}>
            <Box component="form" autoComplete="off" display='flex' flexDirection='column' sx={{
                minWidth: '300px',
            }}>
                <Typography variant="h3" p={6}>
                    Sign In
                </Typography>
                <TextField required variant='outlined' placeholder="email@youremail.com" inputProps={ariaLabel} sx={{ marginBottom: '20px' }} />
                <TextField placeholder="password" inputProps={ariaLabel} required />
                <Button type='submit' variant="contained" sx={{ margin: 2, bgcolor: 'black' }}>Log In </Button>
            </Box>
        </Box>
    );
}
export default SignIn;
