import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
function SignIn(setSignedIn) {
    const ariaLabel = { 'aria-label': 'description' };
    function handleSignIn() {
        setSignedIn(true);
    }
    const signInStyle = {
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
    }
    return (
        <Box sx={signInStyle}>
            <Box
                component="form"
                autoComplete="off"
                display='flex'
                flexDirection='column'
                sx={{ minWidth: '300px' }}>
                <Typography variant="h3" p={6}>
                    Sign In
                </Typography>
                <TextField
                    required
                    variant='outlined'
                    placeholder="email@youremail.com"
                    inputProps={ariaLabel}
                    sx={{ marginBottom: '20px' }} />
                <TextField placeholder="password" inputProps={ariaLabel} required />
                <Button onClick={handleSignIn}
                    type='submit'
                    variant="contained"
                    sx={{ margin: 2, bgcolor: 'black' }}>
                    Log In
                </Button>
            </Box>
        </Box>
    );
}
export default SignIn;
