import { createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios"


const initialState = {
    isLoggedIn: false,
    token: "",
    isLoading: false,
}


const slice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        logIn(state, action) {
            state.isLoggedIn = action.payload.isLoggedIn;
            state.token = action.payload.token;
        },
        signOut(state, action) {
            state.isLoggedIn = false;
            state.token = "";
        }
    }
});

export default slice.reducer;


export function LoginUser(form) { // Email and Password
    return async (dispatch, getState) => {
        await axios.post("/auth/login", {
           ...form
        }, {
            headers: {
                "Content-Type": "application/json",
            }
        }).then(function (res) {
            console.log(res);
            dispatch(slice.actions.logIn({
                isLoggedIn: true,
                token: res.data.token,
            }));
        }).catch(function (err) {
            console.log(err);
        });
    };
};


export function LogoutUser() {
    return (dispatch, getState) => {
        dispatch(slice.actions.signOut());
    };
};


export function ForgotPassword(form) {
    return async (dispatch, getState) => {
        await axios.post("/auth/forgot-password", {
            ...form
        }, {
            headers: {
                "Content-type": "application/json"
            }
        }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });
    };
};


export function UpdatePassword(form) {
    return async (dispatch, getState) => {
        await axios.post("/auth/reset-password", {
            ...form
        }, {
            headers: {
                "Content-type": "application/json"
            }
        }).then((res) => {
            console.log(res);
            dispatch(slice.actions.logIn({
                isLoggedIn: true,
                token: res.data.token,
            }));
        }).catch((err) => {
            console.log(err);
        });
    };
};


