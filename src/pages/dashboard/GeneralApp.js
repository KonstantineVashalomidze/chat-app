import React from "react";
import Chats from "./Chats";
import {Box, Stack} from "@mui/material";
import Conversation from "../../components/conversation";
import Contact from "../../components/contact/Contact";
import {useSelector} from "react-redux";
import SharedMessages from "../../components/sharedMessages/SharedMessages";
import TopMessages from "../../components/sharedMessages/TopMessages";
import SelectConversation from "../../assets/Illustration/SelectConversation";


const GeneralApp = () => {
  const {sidebar, roomId} = useSelector((store) => store.app);

  return (
    <>
        <Stack direction={"row"} >
            {(sidebar.open && roomId !== null) && (() => {
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
            <Box sx={{height: "100vh", width: (sidebar.open && roomId !== null) ? "calc(100vw - 740px)" : "calc(100vw - 420px)" }}>
                {roomId === null ? <SelectConversation /> : <Conversation isGroup={false} />}
            </Box>
            <Chats />
        </Stack>
    </>
  );
};
export default GeneralApp;
