import React from "react";
import Chats from "./Chats";
import {Box, Stack} from "@mui/material";
import Conversation from "../../components/Conversation";
import Contact from "../../components/Contact/Contact";
import {useSelector} from "react-redux";
import SharedMessages from "../../components/SharedMessages/SharedMessages";


const GeneralApp = () => {
    const {sidebar} = useSelector((store) => store.app);

  return (
    <>
        <Stack direction={"row"} sx={{width: "100%", boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)"}} >
            {sidebar.open && (() => {
                switch (sidebar.type) {
                    case "CONTACT":
                        return <Contact />;
                    case "TOP_MESSAGES":
                        // return <TopMessages />;
                        break;
                    case "SHARED":
                        return <SharedMessages />;
                    default:
                        break;
                }
            }) ()}
            <Box sx={{height: "100%", width: sidebar.open ? "calc(100vw - 735px)" : "calc(100vw - 415px)"}}>
                <Conversation />
            </Box>
            <Chats />
        </Stack>
    </>
  );
};
export default GeneralApp;
