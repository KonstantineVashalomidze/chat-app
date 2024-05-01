import { createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios"


const initialState = {
    isLoggedIn: false,
    token: "",
    isLoading: false,
    email:"",
    error: false
}


const slice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        updateIsLoading(state, action) {
            state.error = action.payload.error;
            state.isLoading = action.payload.isLoading;
        },
        logIn(state, action) {
            state.isLoggedIn = action.payload.isLoggedIn;
            state.token = action.payload.token;
        },
        signOut(state, action) {
            state.isLoggedIn = false;
            state.token = "";
        },
        updateSignupEmail(state, action) {
            state.email = action.payload.email;
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


export function Signup(form) {
    return async (dispatch, getState) => {
        dispatch(slice.actions.updateIsLoading({isLoading: true, error: false}));
        await axios.post("/auth/signup", {
            ...form
        }, {
            headers: {
                "Content-type": "application/json"
            }
        }).then((res) => {
            console.log(res);
            dispatch(slice.actions.updateSignupEmail({email: form.email}));
            dispatch(slice.actions.updateIsLoading({isLoading: false, error: false}));
        }).catch((err) => {
            console.log(err);
            dispatch(slice.actions.updateIsLoading({isLoading: false, error: true}));
        }).finally(() => {
            if (!getState().auth.error) {
                window.location.href = "/auth/email-verification";
            }
        });
    };
};


export function VerifyEmail(form) {
    return async (dispatch, getState) => {
        await axios.post("/auth/verify-otp", {
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




