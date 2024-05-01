import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    sidebar: {
        open: false,
        type: "CONTACT", // CONTACT, STARRED, SHARED
    },
    snackbar: {
        open: null,
        message: null,
        severity: null
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

