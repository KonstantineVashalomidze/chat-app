import React from "react";
import Chats from "./Chats";
import {Box, Stack} from "@mui/material";
import Conversation from "../../components/conversation";
import Contact from "../../components/contact/Contact";
import {useSelector} from "react-redux";
import SharedMessages from "../../components/sharedMessages/SharedMessages";
import TopMessages from "../../components/sharedMessages/TopMessages";


const GeneralApp = () => {
  const {sidebar} = useSelector((store) => store.app);

  return (
    <>
        <Stack direction={"row"} sx={{boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)"}} >
            {sidebar.open && (() => {
                switch (sidebar.type) {
                    case "CONTACT":
                        return <Contact />;
                    case "TOP_MESSAGES":
                        return <TopMessages />;
                    case "SHARED":
                        return <SharedMessages />;
                    default:
                        break;
                }
            }) ()}
            <Box sx={{height: "100%", width: sidebar.open ? "calc(100vw - 740px)" : "calc(100vw - 420px)"}}>
                <Conversation />
            </Box>
            <Chats />
        </Stack>
    </>
  );
};
export default GeneralApp;
