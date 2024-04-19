import {Box, Stack} from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import {useTheme} from "@mui/material/styles";
import Message from "./Message";
import SimpleBarReact from "simplebar-react";


const Conversation = () => {
    const theme = useTheme();



    const backgroundColor = theme.palette.mode === "light"
        ? "#fff"
        : theme.palette.background.default;


    const conversationBackgroundColor = theme.palette.mode === "light"
        ? "#F0F4FA"
        : theme.palette.background.paper;

    return (
        <Stack p={1} height={"100%"} maxHeight={"100vh"} width={"auto"} sx={{boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)", backgroundColor: conversationBackgroundColor }}>
            <Box p={2} sx={{width: "100%", backgroundColor: backgroundColor }}>

                <Header />

            </Box>
            <Box sx={{boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)", width: "100%", flexGrow: 1, overflow: "hidden", height: "100%"}} >
                <SimpleBarReact style={{ maxHeight: "100%" }}>
                    <Message />
                </SimpleBarReact>
            </Box>
            <Box sx={{boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)", width: "100%", backgroundColor: backgroundColor }}>

                <Footer />

            </Box>
        </Stack>
    )
}



export default Conversation