// routes
import Router from "./routes";
// theme
import ThemeProvider from './theme';
// components
import ThemeSettings from './components/settings';
import {Snackbar} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {hideSnackbar} from "./redux/slices/app";
import MuiAlert from "@mui/material/Alert";
import {forwardRef} from "react";

const Alert = forwardRef(function Alert(props, ref) {
   return <MuiAlert evaluation={6} ref={ref} variant={"filled"} {...props} />;
});

function App() {
    const {open, message, severity} = useSelector((state) => state.app.snackbar);
    const dispatch = useDispatch();
    const vertical = "top";
    const horizontal = "right";

    return (
    <>
        <ThemeProvider>
            <ThemeSettings>
                {" "}
                <Router />{" "}
            </ThemeSettings>
        </ThemeProvider>
        {(message && open) &&
        <Snackbar anchorOrigin={{vertical, horizontal}} open={open} autoHideDuration={2000} key={vertical + horizontal} onClose={() => {
            dispatch(hideSnackbar());
        }}>
            <Alert
                severity={severity}
                variant="filled"
                onClose={() => {
                    dispatch(hideSnackbar());
                }}
                sx={{ width: '100%' }}
            >
                {message}
            </Alert>
        </Snackbar>}
    </>
  );
};

export default App;
