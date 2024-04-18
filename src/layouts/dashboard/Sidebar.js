import React, {useState} from "react";
import {useTheme} from "@mui/material/styles";
import {Avatar, Box, Divider, IconButton, Stack} from "@mui/material";
import Logo from "../../assets/Images/logo.ico";
import {Nav_Buttons} from "../../data";
import {Calendar, ChatCircleDots, Chats, Gear, Phone, Users} from "phosphor-react";
import {faker} from "@faker-js/faker";
import useSettings from "../../hooks/useSettings";
import AntSwitch from "../../components/AntSwitch";

const SideBar = () => {
    const theme = useTheme();
    const [selected, setSelected] = useState(0);
    const { onToggleMode } = useSettings();
    return (
        <Box p={2} sx={{backgroundColor: theme.palette.background.paper, boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)", height: "100vh", width: 100}}>
            <Stack direction={"column"} alignItems={"center"} justifyContent={"space-between"} sx={{height: "100%"}} spacing={3}>
                <Stack alignItems={"center"} spacing={4}>
                    <Box>
                        <img src={Logo} alt={"Chat App Logo"}/>
                    </Box>
                    <Stack spacing={3} sx={{width: "max-content"}} direction={"column"} alignItems={"center"}>
                        {Nav_Buttons.map((el) =>
                            el.index === selected ?
                                (
                                    <Box
                                        sx={{
                                            position: "relative",
                                            color: theme.palette.mode === "light" ? "#000" : theme.palette.text.primary,
                                        }}
                                    >
                                        <IconButton
                                            sx={{
                                                width: "max-content",
                                            }}
                                        >
                                            {el.index === 0 ? <Chats color={theme.palette.primary.main} /> : null}
                                            {el.index === 1 ? <Users color={theme.palette.primary.main} /> : null}
                                            {el.index === 2 ? <Phone color={theme.palette.primary.main} /> : null}
                                            {el.index === 3 ? <Calendar color={theme.palette.primary.main} /> : null}
                                        </IconButton>
                                        <Box
                                            sx={{
                                                position: "absolute",
                                                top: 0,
                                                left: -8,
                                                height: "100%",
                                                width: 2,
                                                backgroundColor: theme.palette.primary.main,
                                            }}
                                        />
                                    </Box>
                                )
                                :
                                (
                                    <IconButton onClick={() => {
                                        setSelected(el.index);
                                    }}
                                                key={el.index}
                                                sx={{ width: "max-content" }}>
                                        {el.icon}
                                    </IconButton>
                                )
                        )}
                        <Divider sx={{width: "48px"}} />
                        {selected === 4
                            ? (
                                <Box
                                    sx={{
                                        position: "relative",
                                        color: theme.palette.mode === "light" ? "#000" : theme.palette.text.primary,
                                    }}
                                >
                                    <IconButton
                                        sx={{width: "max-content", color: theme.palette.mode === "light" ? "#000" : theme.palette.text.primary}}
                                    >
                                        <Gear color={theme.palette.primary.main} />
                                    </IconButton>
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            top: 0,
                                            left: -8,
                                            height: "100%",
                                            width: 2,
                                            backgroundColor: theme.palette.primary.main,
                                        }}
                                    />
                                </Box>
                            ) :
                            (<IconButton
                                onClick={() => {
                                    setSelected(4);
                                }}>
                                <Gear />
                            </IconButton>)}
                    </Stack>
                </Stack>
                <Stack spacing={4}>
                    <AntSwitch onChange={() => { onToggleMode(); }} checkedColor={theme.palette.primary.main} defaultChcked />
                    <Avatar src={faker.image.avatar()} sx={{boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)"}} />
                </Stack>
            </Stack>
        </Box>
    );
};
export default SideBar;
