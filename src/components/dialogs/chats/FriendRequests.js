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
import {Minus, Plus} from "phosphor-react";


const FriendRequests = ({ open, onClose }) => {
    const [currentTab, setCurrentTab] = useState(0);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(FetchUsers());
        dispatch(FetchFriends());
        dispatch(FetchFriendRequests());
    }, [dispatch]);

    const {users} = useSelector((store) => store.app);
    const {friends} = useSelector((store) => store.app);
    const {friendRequests} = useSelector((store) => store.app);




    const handleTabChange = (event, newValue) => {
        setCurrentTab(newValue);
    };

    const renderUserList = (users) => (
        <SimpleBarReact style={{ maxHeight: 300 }}>
            <List>
                {users.map((user) => (
                    <ListItem key={user.id}>
                        <ListItemAvatar>
                            <Avatar src={user.avatar} />
                        </ListItemAvatar>
                        <ListItemText primary={`${user.firstName} ${user.lastName}`} />
                        {currentTab === 0 && <Plus />}
                        {currentTab === 1 && <Minus />}
                        {currentTab === 2 && (
                            <>
                                <Plus />
                                <Minus />
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
                {currentTab === 0 && renderUserList(users)}
                {currentTab === 1 && renderUserList(friends)}
                {currentTab === 2 && renderUserList(friendRequests)}
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