import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
function Appbar() {
    return (
        <AppBar
            position="fixed"
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
            <Toolbar>
                <Typography variant="h6" noWrap component="div">
                    LawnCare App
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
export default Appbar;
