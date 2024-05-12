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
                console.log("friend request accepted", data);
                // Dispatch an action to show a success snackbar with the received message
                dispatch(showSnackbar({ severity: data.status, message: data.message }));
            });

            // Event listener for a friend request being sent
            socket.on("friendRequestSent", (data) => {
                // Dispatch an action to show a success snackbar with the received message
                dispatch(showSnackbar({ severity: data.status, message: data.message }));
            });

            socket.on("startChat", (data) => {
                const conversation = conversations.find((e) => e.id === data._id);
                if (conversation) {
                    dispatch(UpdateIndividualConversation({conversation: data}));
                } else {
                    dispatch(AddIndividualConversation({conversation: data}));
                }
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
    }, [isLoggedIn, conversations, userId, dispatch]);





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
