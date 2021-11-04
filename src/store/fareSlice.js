import {createSlice} from '@reduxjs/toolkit';

const initialFareState = {
    publishFare: 0.0
}

const fareSlice = createSlice({
    name: 'fareSlice',
    initialState: initialFareState,
    reducers: {
        setPublishFare(state, action) {
            state.publishFare = action.payload;
        }
    }
});

export const fareActions = fareSlice.actions;

export default fareSlice;