import { create } from '@mui/material/styles/createTransitions';
import {createSlice} from '@reduxjs/toolkit';

const initialCreditState = {
    credit: 0.0
}

const creditSlice = createSlice({
    name: 'creditSlice',
    initialState: initialCreditState,
    reducers: {
        setCredit(state, action) {
            state.credit = action.payload
        }
    }
});

export const creditActions = creditSlice.actions;
export default creditSlice;
