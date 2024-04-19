import React from "react";
import {Avatar, Box, IconButton, Stack, Typography} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import {X} from "phosphor-react";
import {useDispatch} from "react-redux";
import {toggleSideBar} from "../../redux/slices/app";
import {faker} from "@faker-js/faker"


const Contact = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    return (
        <Box sx={{width: 320, height: "100vh"}} >
            <Stack sx={{height: "100%"}}>
                <Box sx={{boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)", width: "100%", backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background, }} >
                    <Stack sx={{height: "100%", p: 2}} direction={"row"} alignItems={"center"} justifyContent={"space-between"} spacing={3}>
                        <Typography variant={"subtitle2"} >
                            Contact Info
                        </Typography>
                        <IconButton onClick={() => {dispatch(toggleSideBar())} }>
                            <X color={theme.palette.primary.main} />
                        </IconButton>
                    </Stack>
                </Box>
                <Stack p={3} spacing={3} sx={{position: "relative", flexGrow: 1, overflow: "hidden", height: "100%"}}>
                    <Stack alignItems={"center"} spacing={2}>
                        <div style={{ border: "4px solid " + theme.palette.primary.main, borderRadius: "50%", padding: "2px" }}>
                            <Avatar src={faker.image.avatar()} alt={faker.name.firstName()} sx={{height: 100, width: 100}} />
                        </div>
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    );
};
export default Contact;
