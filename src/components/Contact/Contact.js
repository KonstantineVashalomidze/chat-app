import React from "react";
import {Avatar, Box, Button, Divider, IconButton, Stack, Typography} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import {BellSimple, CaretRight, Phone, Sparkle, Star, UserCircleMinus, UserMinus, VideoCamera, X} from "phosphor-react";
import {useDispatch} from "react-redux";
import {toggleSideBar} from "../../redux/slices/app";
import {faker} from "@faker-js/faker"
import SimpleBarReact from "simplebar-react";
import AntSwitch from "../AntSwitch";


const Contact = () => {
    const theme = useTheme();
    const dispatch = useDispatch();


    const backgroundColor = theme.palette.mode === "light"
        ? "#fff"
        : theme.palette.background.default;

    return (
        <Box sx={{width: 320, height: "100vh", background: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background.paper}} >
            <Stack p={1} sx={{height: "100%"}}>
                <Box sx={{boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)", width: "100%", backgroundColor: backgroundColor }} >
                    <Stack sx={{height: "100%", p: 1}} direction={"row"} alignItems={"center"} justifyContent={"space-between"} spacing={3}>
                        <Typography variant={"h5"} >
                            Contact Info
                        </Typography>
                        <IconButton onClick={() => {dispatch(toggleSideBar())} }>
                            <X color={theme.palette.primary.main} />
                        </IconButton>
                    </Stack>
                </Box>
                <Box sx={{width: "100%" }}>
                    <Stack alignItems={"center"} paddingTop={2} paddingBottom={1} spacing={0.5} sx={{position: "relative", flexGrow: 1, overflow: "hidden", height: "100%"}}>
                        <Stack alignItems={"center"} spacing={0.5}>
                            <div style={{ border: "4px solid " + theme.palette.primary.main, borderRadius: "50%", padding: "2px" }}>
                                <Avatar src={faker.image.avatar()} alt={faker.name.firstName()} sx={{height: 100, width: 100}} />
                            </div>
                            <Stack alignItems={"center"}>
                                <Typography variant="article" fontweight={600}>
                                    {faker.name.fullName()}
                                </Typography>
                                <Typography variant="body2" fontweight={600}>
                                    {faker.phone.number()}
                                </Typography>
                            </Stack>
                        </Stack>
                        <Stack sx={{width: "100%"}} direction={"row"} alignItems={"center"} justifyContent={"center"} >
                            <Stack px={2} spacing={0.5} alignItems={"center"}>
                                <IconButton >
                                    <Phone color={theme.palette.primary.main} />
                                </IconButton>
                                <Typography variant={"overline"} >
                                    Voice
                                </Typography>
                            </Stack>
                            <Stack px={2} spacing={0.5} alignItems={"center"}>
                                <IconButton >
                                    <VideoCamera color={theme.palette.primary.main} />
                                </IconButton>
                                <Typography variant={"overline"} >
                                    Video
                                </Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                </Box>
                <Divider />
                <Box px={1} paddingTop={0.5}>
                    <Typography variant={"article"}>
                        About
                    </Typography>
                </Box>
                <Box p={1.5} sx={{ width: "100%", flexGrow: 1, overflow: "hidden", height: "100px" }} >
                    <SimpleBarReact style={{maxHeight: "100%"}}>
                        <Typography variant={"body2"}>
                            {faker.lorem.lines()}
                        </Typography>
                    </SimpleBarReact>
                </Box>
                <Divider />
                <Box p={1} sx={{width: "100%"}}>
                    <Stack direction={"row"} justifyContent={"space-between"}>
                        <Stack direction={"row"} alignItems={"center"} spacing={1}>
                            <Typography variant={"body2"} >
                                Media
                            </Typography>
                        </Stack>
                        <Stack direction={"row"} alignItems={"center"} >
                            <Typography variant={"subtitle1"} >
                                {faker.random.numeric()}
                            </Typography>
                            <IconButton >
                                <CaretRight color={theme.palette.primary.main} />
                            </IconButton>
                        </Stack>
                    </Stack>
                    <Stack direction={"row"} spacing={2} alignItems={"center"}>
                        {[1, 2, 3].map((el) => (
                            <Box>
                                <img src={faker.image.food()} alt={faker.name.fullName()}/>
                            </Box>
                        ))}
                    </Stack>
                </Box>
                <Divider />
                <Box p={1} sx={{width: "100%"}}>
                    <Stack direction={"row"} justifyContent={"space-between"}>
                        <Stack direction={"row"} alignItems={"center"} spacing={1}>
                            <Star color={theme.palette.primary.main} weight="fill" />
                            <Typography variant={"body2"} >
                                Top Messages
                            </Typography>
                        </Stack>
                        <IconButton >
                            <CaretRight color={theme.palette.primary.main} />
                        </IconButton>
                    </Stack>
                </Box>
                <Divider />
                <Box p={1} sx={{width: "100%"}}>
                    <Stack direction={"row"} justifyContent={"space-between"}>
                        <Stack direction={"row"} alignItems={"center"} spacing={1}>
                            <BellSimple color={theme.palette.primary.main} weight="fill" />
                            <Typography variant={"body2"} >
                                Mute
                            </Typography>
                        </Stack>
                        <AntSwitch onChange={() => {
                        }} checkedColor={theme.palette.primary.main} defaultChcked/>
                    </Stack>
                </Box>
                <Divider />
                <Typography variant={"caption"} p={1}>
                    {faker.random.numeric()} group in common
                </Typography>
                <Stack direction={"row"} alignItems={"center"} spacing={2}>
                    <Avatar src={faker.image.avatar()} alt={faker.name.fullName()} />
                    <Stack spacing={0.5}>
                        <Typography variant={"subtitle2"}>
                            Los Dogos
                        </Typography>
                        <Typography variant={"caption"}>
                            Giorgi, Akaki, Misho, Vako, You
                        </Typography>
                    </Stack>
                </Stack>
                <Stack direction={"row"} alignItems={"center"} spacing={2} justifyContent={"center"}>
                    <Button startIcon={<UserMinus weight="fill" />} fullwidth variant={"outlined"} sx={{borderRadius: 2}}>
                        Block
                    </Button>
                    <Button startIcon={<UserCircleMinus weight="fill" />} fullwidth variant={"outlined"} sx={{borderRadius: 2}}>
                        Delete
                    </Button>
                </Stack>
            </Stack>
        </Box>
    );
};
export default Contact;
