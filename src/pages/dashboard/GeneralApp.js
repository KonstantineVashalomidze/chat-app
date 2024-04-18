import React from "react";
import Chats from "./Chats";
import {Box, Stack} from "@mui/material";
import Conversation from "../../components/Conversation";


const GeneralApp = () => {

  return (
    <>
        <Stack direction={"row"} sx={{width: "100%", boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)"}} >
            <Box sx={{height: "100%", width: "calc(100vw - 415px)" }}>
                <Conversation />
            </Box>
            <Chats />
        </Stack>
    </>
  );
};
export default GeneralApp;
