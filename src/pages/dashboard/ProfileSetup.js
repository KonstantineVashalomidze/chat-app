import {
    Avatar,
    Box,
    Button,
    Divider,
    IconButton,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { faker } from "@faker-js/faker";
import SimpleBarReact from "simplebar-react";
import { toggleSideBar } from "../../redux/slices/app";
import { X } from "phosphor-react";
import { useDispatch } from "react-redux";

const ProfileSetup = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [about, setAbout] = useState("");
    const [nameError, setNameError] = useState(false);
    const [aboutError, setAboutError] = useState(false);

    const backgroundColor =
        theme.palette.mode === "light"
            ? "#fff"
            : theme.palette.background.default;

    const handleSave = () => {
        let hasError = false;

        if (name.length < 4) {
            setNameError(true);
            hasError = true;
        } else {
            setNameError(false);
        }

        if (about.length < 20) {
            setAboutError(true);
            hasError = true;
        } else {
            setAboutError(false);
        }

        if (!hasError) {
            // Handle save logic here
            console.log("Name:", name);
            console.log("About:", about);
        }
    };

    const handleNameFocus = () => {
        setNameError(false);
    };

    const handleAboutFocus = () => {
        setAboutError(false);
    };

    return (
        <>
            <Box
                sx={{
                    width: 320,
                    height: "100vh",
                    background: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background.paper,
                    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
                }}
            >
                <Stack p={1} sx={{ height: "100%" }}>
                    <Box
                        sx={{
                            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
                            width: "100%",
                            backgroundColor: backgroundColor,
                        }}
                    >
                        <Stack
                            sx={{ height: "100%", p: 1 }}
                            direction={"row"}
                            alignItems={"center"}
                            justifyContent={"space-between"}
                            spacing={3}
                        >
                            <Typography variant={"h5"}>Set Profile</Typography>
                            <IconButton onClick={() => { dispatch(toggleSideBar()) }}>
                                <X color={theme.palette.primary.main} />
                            </IconButton>
                        </Stack>
                    </Box>
                    <Box sx={{ width: "100%" }}>
                        <Stack
                            alignItems={"center"}
                            paddingTop={2}
                            paddingBottom={1}
                            spacing={0.5}
                            sx={{
                                position: "relative",
                                flexGrow: 1,
                                overflow: "hidden",
                                height: "100%",
                            }}
                        >
                            <Stack alignItems={"center"} spacing={0.5}>
                                <div
                                    style={{
                                        border: "4px solid " + theme.palette.primary.main,
                                        borderRadius: "50%",
                                        padding: "2px",
                                    }}
                                >
                                    <Avatar
                                        src={faker.image.avatar()}
                                        alt={faker.name.firstName()}
                                        sx={{ height: 100, width: 100 }}
                                    />
                                </div>
                            </Stack>
                            <TextField
                                label="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                variant="outlined"
                                fullWidth
                                sx={{py: 5}}
                                error={nameError}
                                helperText={nameError ? "Name must be at least 4 characters" : ""}
                                onFocus={handleNameFocus}
                            />
                            <TextField
                                label="About"
                                value={about}
                                onChange={(e) => setAbout(e.target.value)}
                                variant="outlined"
                                fullWidth
                                sx={{py: 5}}
                                multiline
                                rows={4}
                                error={aboutError}
                                helperText={aboutError ? "About must be at least 20 characters" : ""}
                                onFocus={handleAboutFocus}
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleSave}
                                sx={{ mt: 2 }}
                            >
                                Save
                            </Button>
                        </Stack>
                    </Box>
                </Stack>
            </Box>
        </>
    );
};

export default ProfileSetup;