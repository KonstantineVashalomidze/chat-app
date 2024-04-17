import react from 'react';
import {Box, Stack} from "@mui/material";
import TopBar from "./TopBar";
import InputBar from "./InputBar";
import {useTheme} from "@mui/material/styles";


const Conversation = () => {
    const theme = useTheme();

    const boxShadow = theme.palette.mode === "light"
        ? "0px 0px 2px rgba(0, 0, 0, 0.25)"
        : "0px 0px 2px rgba(255, 255, 255, 0.25)";

    const backgroundColor = theme.palette.mode === "light"
        ? "#fff"
        : theme.palette.background.default;


    const conversationBackgroundColor = theme.palette.mode === "light"
        ? "#fff"
        : theme.palette.background.paper;

    return (
        <Stack p={1} height={"100%"} maxHeight={"100vh"} width={"auto"} sx={{backgroundColor: conversationBackgroundColor }}>
            <Box p={2} sx={{width: "100%", backgroundColor: backgroundColor, boxShadow: { boxShadow } }}>

                <TopBar />

            </Box>
            <Box sx={{width: "100%", flexGrow: 1}}>


            </Box>
            <Box sx={{width: "100%", backgroundColor: backgroundColor, boxShadow: { boxShadow } }}>

                <InputBar />

            </Box>
        </Stack>
    )
}



export default Conversation