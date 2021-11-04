import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
    allUser: [],
    unActiveUser: [],
    user: {}
}

const userManageSlice = createSlice({
    name: 'userManageSlice',
    initialState: initialUserState,
    reducers: {
        setAllUser(state, action) {
            state.allUser = action.payload;
        },
        setUnActiveUser(state, action) {
            state.unActiveUser = action.payload;
        },
        setUser(state, action) {
            state.user = action.payload;
        }
    }
});

export const userManageActions = userManageSlice.actions;

export default userManageSlice;