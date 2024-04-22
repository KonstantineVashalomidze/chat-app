


import React, {useState} from "react";
import {Avatar, Badge, Box, Button, Divider, IconButton, InputBase, Stack, Typography} from "@mui/material";
import {alpha, styled, useTheme} from "@mui/material/styles";
import {ArchiveBox, CircleDashed, MagnifyingGlass, Plus} from "phosphor-react";
import SimpleBarReact from "simplebar-react";
import {ChatList} from "../../data";
import {faker} from "@faker-js/faker";
import {ChatElement, Search, SearchIconWrapper, StyledInputBase} from "./Chats";
import CreateGroup from "../../components/dialogs/group/CreateGroup";





const Group = () => {

    const theme = useTheme(false);
    const [showCreateGroupDialog, setShowCreateGroupDialog] = useState();
    const backgroundColor = theme.palette.mode === "light"
        ? "#fff"
        : theme.palette.background.default;

    const handleCloseCreateGroupDialog = () => {
        setShowCreateGroupDialog(false);
    }

    return (
        <>
            <Box
                sx={{ position: "relative", width: 320, backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background.paper, boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)' }}>
                <Stack p={1} spacing={2} sx={{ height: "100vh" }}>
                    <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} sx={{boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)", backgroundColor: backgroundColor }}>
                        <Typography p={1.5} variant={"h5"}>
                            Groups
                        </Typography>
                        <IconButton >
                            <CircleDashed color={theme.palette.primary.main} />
                        </IconButton>
                    </Stack>
                    <Stack sx={{ width: "100%" }}>
                        <Search >
                            <SearchIconWrapper >
                                <MagnifyingGlass color={theme.palette.primary.main} />
                            </SearchIconWrapper>
                            <StyledInputBase placeholder={"Search..."} />
                        </Search>
                    </Stack>
                    <Stack spcing={1}>
                        <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} spacing={1.5}>
                            <Plus size={24} color={theme.palette.primary.main} ></Plus>
                            <Button onClick={() => {setShowCreateGroupDialog(true);} }>Create Team</Button>
                        </Stack>
                        <Divider />
                    </Stack>
                    <Stack spacing={2} direction={"column"} sx={{ flexGrow: 1, overflow: "hidden", height: "100%" }}>
                        <SimpleBarReact style={{ maxHeight: "100%" }}>
                            <Stack spacing={2.4}>
                                <Typography variant={"subtitle2"} sx={{ color: "#676767" }}>
                                    Pinned
                                </Typography>
                                {ChatList.filter((el) => el.pinned).map((el) => {
                                    return <ChatElement {...el} />;
                                })}
                            </Stack>
                            <Stack spacing={2.4}>
                                <Typography variant={"subtitle2"} sx={{ color: "#676767" }} paddingTop={2}>
                                    All Groups
                                </Typography>
                                {ChatList.filter((el) => !el.pinned).map((el) => {
                                    return <ChatElement {...el} />;
                                })}
                            </Stack>
                        </SimpleBarReact>
                    </Stack>
                </Stack>
            </Box>
            {showCreateGroupDialog && <CreateGroup open={showCreateGroupDialog} handleClose={handleCloseCreateGroupDialog} />}
        </>
    );
};


export default Group;





