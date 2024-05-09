import {faker} from "@faker-js/faker";
import {createSlice} from "@reduxjs/toolkit";

const USER_ID = window.localStorage.getItem("userId");



const initialState = {
    individualChat: {
        conversations: [],
        currentConversation: [],
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
                const user = e.participants.find((el) => el._id.toString() !== USER_ID)

                return {
                    id: e._id,
                    userId: user._id,
                    img: faker.image.avatar(),
                    name: `${user.firstName}` `${user.lastName}`,
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
                        name: `${user.firstName}` `${user.lastName}`,
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
                name: `${user.firstName}` `${user.lastName}`,
                msg: faker.music.songName(),
                time: "9:39",
                unread: 0,
                pinned:false,
                online: user.status === "Online"
            });
        }


    }
});

export default slice.reducer;



export function FetchIndividualConversation ({conversations}) {
    return async (dispatch, getState) => {
        dispatch(slice.actions.fetchIndividualConversations({conversations}));
    };
};



export function UpdateIndividualConversation ({conversation}) {
    return async (dispatch, getState) => {
        dispatch(slice.actions.updateIndividualConversation({conversation}));
    };
};

export function AddIndividualConversation ({conversation}) {
    return async (dispatch, getState) => {
        dispatch(slice.actions.addIndividualConversation({conversation}));
    };
};


