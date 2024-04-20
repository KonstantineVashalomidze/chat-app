import {Box, IconButton, Stack, Typography} from "@mui/material";
import {updateSidebarType} from "../../redux/slices/app";
import {X} from "phosphor-react";
import React from "react";
import {useTheme} from "@mui/material/styles";
import {useDispatch} from "react-redux";


const SharedMessages = () => {
    const theme = useTheme();
    const dispatch = useDispatch();

    const backgroundColor = theme.palette.mode === "light"
        ? "#fff"
        : theme.palette.background.default;

    return (
        <Box sx={{width: 320, height: "100vh", background: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background.paper}}>
            <Stack p={1} sx={{height: "100%"}} >
                <Box sx={{boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)", width: "100%", backgroundColor: backgroundColor }} >
                    <Stack sx={{height: "100%", p: 1}} direction={"row"} alignItems={"center"} justifyContent={"space-between"} spacing={3}>
                        <Typography variant={"h5"} >
                            Media
                        </Typography>
                        <IconButton onClick={() => {dispatch(updateSidebarType("CONTACT"))} }>
                            <X color={theme.palette.primary.main} />
                        </IconButton>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    )
}

export default SharedMessages;


