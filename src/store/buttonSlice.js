import { Button } from '@mui/material';
import {createSlice} from '@reduxjs/toolkit';

const initialButtonState = {
    proceedToBookAfterSearchBtn: false
}

const ButtonSlice = createSlice({
    name: 'buttonSlice',
    initialState: initialButtonState,
    reducers: {
        setProceedToBookAfterSearchBtn(state, action) {
            state.proceedToBookAfterSearchBtn = action.payload;
        }
    }
});

export const buttonActions = ButtonSlice.actions;

export default ButtonSlice;