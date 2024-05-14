import React, {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import SimpleBarReact from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import {useDispatch, useSelector} from "react-redux";
import {FetchFriendRequests, FetchFriends, FetchUsers} from "../../../redux/slices/app";
import {ChatDots, Minus, Plus} from "phosphor-react";
import {IconButton} from "@mui/material";
import {socket} from "../../../sockets/socket";


const FriendRequests = ({ open, onClose }) => {
    const [currentTab, setCurrentTab] = useState(0);
    const dispatch = useDispatch();
    const userId = window.localStorage.getItem("userId");
    const {message} = useSelector((state) => state.app.snackbar);

    useEffect(() => {
        dispatch(FetchUsers());
        dispatch(FetchFriends());
        dispatch(FetchFriendRequests());
    }, [message, dispatch]);

    const {users} = useSelector((store) => store.app);
    const {friends} = useSelector((store) => store.app);
    const {friendRequests} = useSelector((store) => store.app);




    const handleTabChange = (event, newValue) => {
        setCurrentTab(newValue);
    };

    const renderListItems = (items) => (
        <SimpleBarReact style={{ maxHeight: 300 }}>
            <List>
                {items.map((item) => (
                    <ListItem key={item.id}>
                        <ListItemAvatar>
                            <Avatar src={item.avatar} />
                        </ListItemAvatar>
                        {currentTab !== 2 && <ListItemText primary={`${item.firstName} ${item.lastName}`}/>}
                        {currentTab === 2 && <ListItemText primary={`${item.sender.firstName} ${item.sender.lastName}`}/>}
                        {currentTab === 0 && <IconButton onClick={() => { socket.emit("friendRequest", {to: item._id, from: userId}) } } ><Plus /></IconButton>}
                        {currentTab === 1 && <IconButton onClick={() => { socket.emit("startConversation", {to: item._id, from: userId }); }} ><ChatDots /></IconButton>}
                        {currentTab === 2 && (
                            <>
                                <IconButton onClick={() => { socket.emit("acceptFriendRequest", { requestId: item._id }) }} >
                                    <Plus />
                                </IconButton>
                                <IconButton >
                                    <Minus />
                                </IconButton>
                            </>
                        )}
                    </ListItem>
                ))}
            </List>
        </SimpleBarReact>
    );

    return (
        <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth keepMounted>
            <DialogTitle>Friend Requests</DialogTitle>
            <DialogContent>
                <Tabs value={currentTab} onChange={handleTabChange}>
                    <Tab label="Explore" />
                    <Tab label="Friends" />
                    <Tab label="Requests" />
                </Tabs>
                {currentTab === 0 && renderListItems(users)}
                {currentTab === 1 && renderListItems(friends)}
                {currentTab === 2 && renderListItems(friendRequests)}
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default FriendRequests;