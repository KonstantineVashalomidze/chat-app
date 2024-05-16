import {faker} from "@faker-js/faker";
import {createSlice} from "@reduxjs/toolkit";

const USER_ID = window.localStorage.getItem("userId");



const initialState = {
    individualChat: {
        conversations: [],
        currentConversation: null,
        currentMessages: [],
    },
    groupChat: {

    }
};



const slice = createSlice({
    name: "conversation",
    initialState,
    reducers: {
        fetchIndividualConversations(state, action) {
            const conversations = action.payload.conversations.map(e => {
                const user = e.participants.find((el) => el._id.toString() !== USER_ID);
                return {
                    id: e._id,
                    userId: user._id,
                    img: faker.image.avatar(),
                    name: `${user.firstName} ${user.lastName}`,
                    msg: faker.music.songName(),
                    time: "9:39",
                    unread: 0,
                    pinned:false,
                    online: user.status === "Online"
                }
            });

            state.individualChat.conversations = conversations;
        },
        updateIndividualConversation(state, action) {
            const conversation = action.payload.conversation;
            state.individualChat.conversations = state.individualChat.conversations.map((e) => {
                if (e.id !== conversation._id) {
                    return e;
                } else {
                    const user = conversation.participants.find((el) => el._id.toString() !== USER_ID);
                    return {
                        id: conversation._id,
                        userId: user._id,
                        img: faker.image.avatar(),
                        name: `${user.firstName} ${user.lastName}`,
                        msg: faker.music.songName(),
                        time: "9:39",
                        unread: 0,
                        pinned:false,
                        online: user.status === "Online"
                    };
                }
            });
        },
        addIndividualConversation(state, action) {
            const conversation = action.payload.conversation;
            const user = conversation.participants.find((el) => el._id.toString() !== USER_ID);
            state.individualChat.conversations.push({
                id: conversation._id,
                userId: user._id,
                img: faker.image.avatar(),
                name: `${user.firstName} ${user.lastName}`,
                msg: faker.music.songName(),
                time: "9:39",
                unread: 0,
                pinned:false,
                online: user.status === "Online"
            });
        },
        setCurrentConversation(state, action) {
            state.individualChat.currentConversation = action.payload;
        },
        fetchCurrentMessages(state, action) {
            const messages = action.payload.messages;
            const formattedMessages = messages.map((el) => ({
                id: el._id,
                type: "msg",
                subtype: el.type,
                message: el.text,
                incoming: el.to === USER_ID,
                outgoing: el.from === USER_ID,
            }));
            state.individualChat.current_messages = formattedMessages;
        },
        addDirectMessage(state, action) {
            state.individualChat.currentMessages.push(action.payload.message);
        }
    },




});

export default slice.reducer;



export function FetchIndividualConversation (data) {

    return async (dispatch, getState) => {
        dispatch(slice.actions.fetchIndividualConversations({conversations: data}));
    };
};

export function UpdateIndividualConversation (data) {
    return async (dispatch, getState) => {
        dispatch(slice.actions.updateIndividualConversation({currentConversation: data}));
    };
};

export function AddIndividualConversation (data) {
    return async (dispatch, getState) => {
        dispatch(slice.actions.addIndividualConversation({conversations: data}));
    };
};

export const FetchCurrentMessages = (data) => {
    return async(dispatch, getState) => {
        dispatch(slice.actions.fetchCurrentMessages({messages: data}));
    }
}


export const SetCurrentConversation = (currentConversation) => {
    return async (dispatch, getState) => {
        dispatch(slice.actions.setCurrentConversation(currentConversation));
    };
};