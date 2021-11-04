import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: false,
  modalBox: false,
  mobileNumber: "",
  password: "",
  isLogin: false,
  isError: false,
  errorMessage: '',
  username: ''
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    setOpenDailogBox(state, action) {
      if (action.payload) {
        state.modalBox = true;
      } else {
        state.modalBox = false;
      }
    },
    setMobileNumber(state, action) {
      state.mobileNumber = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    setError(state, action) {
        state.isError = action.payload.error;
        state.errorMessage = action.payload.message;
    },
    setIsLogin(state, action) {
        state.isLogin = action.payload;
    },
    setIsAuthenticated(state, action) {
        state.isAuthenticated = action.payload;
    },
    setUserName(state, action) {
        state.username = action.payload;
    }
  },
});

export const authActions = authSlice.actions;

export default authSlice;
