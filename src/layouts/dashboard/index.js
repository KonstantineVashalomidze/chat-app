import React, {useEffect} from "react";
import {Navigate, Outlet} from "react-router-dom";
import {Stack} from "@mui/material";


import Sidebar from "./Sidebar";
import {useDispatch, useSelector} from "react-redux";
import {connectSocket, socket} from "../../sockets/socket";
import {showSnackbar} from "../../redux/slices/app";
import SelectConversation from "../../assets/Illustration/SelectConversation";
import {AddIndividualConversation, UpdateIndividualConversation} from "../../redux/slices/conversation";


const DashboardLayout = () => {
    const dispatch = useDispatch();

    const {isLoggedIn} = useSelector((state) => state.auth);
    const {conversations} = useSelector((state) => state.conversation.individualChat);
    const userId = window.localStorage.getItem("userId");

    useEffect(() => {
        // Check if the user is logged in
        if (isLoggedIn) {
            // Add an event listener to the window onload event
            window.onload = function () {
                // Check if the URL doesn't have a hash
                if (!window.location.hash) {
                    // Add a hash '#loaded' to the current URL
                    window.location = window.location + "#loaded";
                    // Reload the localStorage
                    window.localStorage.reload();
                }
            };
        }

        // Check if the socket is not initialized
        if (!socket) {
            // Connect to the socket with the user's ID
            connectSocket(userId);
        }

        // Event listener for receiving a new friend request
        socket.on("newFriendRequest", (data) => {
            // Dispatch an action to show a success snackbar with the received message
            dispatch(showSnackbar({ severity: "success", message: data.message }));
        });

        // Event listener for a friend request being accepted
        socket.on("friendRequestAccepted", (data) => {
            // Dispatch an action to show a success snackbar with the received message
            dispatch(showSnackbar({ severity: "success", message: data.message }));
        });

        // Event listener for a friend request being sent
        socket.on("friendRequestSent", (data) => {
            // Dispatch an action to show a success snackbar with the received message
            dispatch(showSnackbar({ severity: "success", message: data.message }));
        });

        socket.on("startChat", (data) => {
            console.log(data);
            const conversation = conversations.find((e) => e.id === data._id);
            if (conversation) {
                dispatch(UpdateIndividualConversation({conversation: data}));
            } else {
                dispatch(AddIndividualConversation({conversation: data}));
            }
            dispatch(SelectConversation({roomId: data._id}));
        });

        // Cleanup function to remove the event listeners when the component unmounts
        return () => {
            socket?.off("newFriendRequest");
            socket?.off("friendRequestAccepted");
            socket?.off("friendRequestSent");
            socket?.off("startChat");
        };
    }, [isLoggedIn, socket]);





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
