import {createSlice} from "@reduxjs/toolkit";
import axios from "../../utils/axios"

const initialState = {
    sidebar: {
        open: false,
        type: "CONTACT", // CONTACT, STARRED, SHARED
    },
    snackbar: {
        open: null,
        message: null,
        severity: null
    },
    users: [],
    friends: [],
    friendRequests: [],
    roomId: null,
}

const slice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        // toggle sidebar
        toggleSidebar(state, action) {
            state.sidebar.open = !state.sidebar.open;
        },
        updateSidebarType(state, action) {
            state.sidebar.type = action.payload.type;
        },
        showSnackbar(state, action) {
            state.snackbar.open = true;
            state.snackbar.message = action.payload.message;
            state.snackbar.severity = action.payload.severity;
        },
        hideSnackbar(state, action) {
            state.snackbar.open = false;
            state.snackbar.message = null;
            state.snackbar.severity = null;
        },
        updateUsers(state, action) {
            state.users = action.payload.users;
        },
        updateFrineds(state, action) {
            state.friends = action.payload.friends;
        },
        updateFriendRequests(state, action) {
            state.friendRequests = action.payload.friendRequests;
        },
        selectConversationElement(state, action) {
            state.roomId = action.payload.roomId;
        }

    }
})



export default slice.reducer;

export function toggleSideBar () {
    return async (dispatch, getState) => {
        dispatch(slice.actions.toggleSidebar())
    }
}

export function updateSidebarType (type) {
    return async (dispatch, getState) => {
        dispatch(slice.actions.updateSidebarType({
            type,
        }))
    }
}

export function showSnackbar ({severity, message}) {
    return async (dispatch, getState) => {
        dispatch(slice.actions.showSnackbar({
            message, severity
        }));

        setTimeout(() => {
            dispatch(slice.actions.hideSnackbar())
        }, 2000);
    };
};

export function hideSnackbar () {
    return async (dispatch, getState) => {
        dispatch(slice.actions.hideSnackbar())
    };
};


export function FetchUsers () {
    return async (dispatch, getState) => {
        await axios.get("/user/get-users", {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${getState().auth.token}`,
            }
        }).then((res) => {
            console.log(res);
            dispatch(slice.actions.updateUsers({users: res.data.data}));
        }).catch((err) => {
            console.log(err);
        });
    };
};

export function FetchFriends () {
    return async (dispatch, getState) => {
        await axios.get("/user/get-friends", {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${getState().auth.token}`,
            }
        }).then((res) => {
            console.log(res);
            dispatch(slice.actions.updateFrineds({friends: res.data.data}));
        }).catch((err) => {
            console.log(err);
        });
    };
};



export function FetchFriendRequests () {
    return async (dispatch, getState) => {
        await axios.get("/user/get-friend-requests", {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${getState().auth.token}`,
            }
        }).then((res) => {
            console.log(res);
            dispatch(slice.actions.updateFriendRequests({friendRequests: res.data.data}));
        }).catch((err) => {
            console.log(err);
        });
    };
};


export function SelectConversationElement({roomId}) {
    return (dispatch, getState) => {
        dispatch(slice.actions.selectConversationElement({roomId}));
    };
};