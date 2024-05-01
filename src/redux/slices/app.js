import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    sidebar: {
        open: false,
        type: "CONTACT", // CONTACT, STARRED, SHARED

    }
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

