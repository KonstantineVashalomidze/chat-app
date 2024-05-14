import React, {useEffect} from "react";
import {Navigate, Outlet} from "react-router-dom";
import {Stack} from "@mui/material";


import Sidebar from "./Sidebar";
import {useDispatch, useSelector} from "react-redux";
import {connectSocket, socket} from "../../sockets/socket";
import {SelectConversationElement, showSnackbar} from "../../redux/slices/app";
import {
    AddIndividualConversation,
    UpdateIndividualConversation
} from "../../redux/slices/conversation";


const DashboardLayout = () => {
    const dispatch = useDispatch();

    const {isLoggedIn} = useSelector((state) => state.auth);
    const {conversations} = useSelector((state) => state.conversation.individualChat);
    const userId = window.localStorage.getItem("userId");

    useEffect(() => {

        if (isLoggedIn) {
            window.onload = function () {
                if (!window.location.hash) {
                    window.location = window.location + "#loaded";
                    window.location.reload();
                }
            };

            window.onload();

            // Check if the socket is not initialized
            if (!socket) {
                // Connect to the socket with the user's ID
                connectSocket(userId);
            }

            // Event listener for receiving a new friend request
            socket.on("newFriendRequest", (data) => {
                // Dispatch an action to show a success snackbar with the received message
                dispatch(showSnackbar({ severity: data.status, message: data.message }));
            });

            // Event listener for a friend request being accepted
            socket.on("friendRequestAccepted", (data) => {
                // Dispatch an action to show a success snackbar with the received message
                dispatch(showSnackbar({ severity: data.status, message: data.message }));
            });

            // Event listener for a friend request being sent
            socket.on("friendRequestSent", (data) => {
                // Dispatch an action to show a success snackbar with the received message
                dispatch(showSnackbar({ severity: data.status, message: data.message }));
            });

            // Listen for the "startChat" event from the server
            // data: An object containing the conversation details
            socket.on("startChat", (data) => {
                // Check if the conversation already exists in the local `conversations` array
                // by finding an element whose `id` matches the `_id` of the received conversation data
                const conversation = conversations.find((e) => e.id === data._id);
                if (conversation) {    // If the conversation exists in the local array
                    // Update the existing conversation in the Redux store with the latest conversation data
                    dispatch(UpdateIndividualConversation({conversation: data}));
                } else {    // If the conversation does not exist in the local array
                    // Add the new conversation to the Redux store
                    dispatch(AddIndividualConversation({conversation: data}));
                }
                // Dispatch an action to select the current conversation in the UI
                // by passing the `_id` of the conversation as the `roomId`
                dispatch(SelectConversationElement({roomId: data._id}));
            });


        }

        // Cleanup function to remove the event listeners when the component unmounts
        return () => {
            socket?.off("newFriendRequest");
            socket?.off("friendRequestAccepted");
            socket?.off("friendRequestSent");
            socket?.off("startChat");
        };
    }, [isLoggedIn, conversations, dispatch, userId]);





    if (!isLoggedIn) {
        return <Navigate to={"auth/login"} />;
    }

  return (
    <Stack direction={"row"}>
      <Sidebar />
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
