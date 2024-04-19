import React, {useState} from "react";
import {useTheme} from "@mui/material/styles";
import {Avatar, Box, Divider, IconButton, Menu, MenuItem, Stack} from "@mui/material";
import Logo from "../../assets/Images/logo.ico";
import {Nav_Buttons, Profile_Menu} from "../../data";
import {Calendar, Chats, Gear, Phone, Users} from "phosphor-react";
import {faker} from "@faker-js/faker";
import useSettings from "../../hooks/useSettings";
import AntSwitch from "../../components/AntSwitch";

const SideBar = () => {
    const theme = useTheme();
    const [selected, setSelected] = useState(0);
    const { onToggleMode } = useSettings();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box p={2} sx={{backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background.paper, boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)", height: "100vh", width: 100}}>
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
                    <AntSwitch onChange={() => {
                        onToggleMode();
                    }} checkedColor={theme.palette.primary.main} defaultChcked/>
                        <div style={{
                            border: "2px solid " + theme.palette.primary.main,
                            borderRadius: "50%",
                            padding: "2px"
                        }}>
                            <Avatar id="basic-button" aria-controls={open ? "basic-menu" : undefined} aria-haspopup="true"
                                    aria-expanded={open ? "true" : undefined} onClick={handleClick}
                                    src={faker.image.avatar()} sx={{boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)"}}/>
                        </div>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                "aria-labelledby": "basic-button",
                            }}
                            anchorOrigin={{vertical: "bottom", horizontal: "right"}}
                            transformOrigin={{vertical: "bottom", horizontal: "left"}}
                        >
                            <Stack spacing={1} px={1}>
                                {Profile_Menu.map((el) => (
                                    <MenuItem key={el.title} onClick={handleClose}>
                                        <Stack sx={{width: 100}} direction={"row"} alignItems={"center"}
                                               justifyContent={"space-between"}>
                                        <span>
                                            {el.title}
                                        </span>
                                            {el.icon}
                                        </Stack>
                                    </MenuItem>
                                ))}
                            </Stack>
                        </Menu>
                </Stack>
            </Stack>
        </Box>
);
};
export default SideBar;
