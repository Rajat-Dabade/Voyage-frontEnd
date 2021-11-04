import { createSlice } from "@reduxjs/toolkit";

const initialFareRuleState = {
    isFareRuleDone: false,
    fareRuleOneWay: {},
    fareRuleSecondWay: {}
};

const fareRuleSlice = createSlice({
    name: 'fareRule',
    initialState: initialFareRuleState,
    reducers: {
        setFareRuleOneWay(state, action) {
            state.fareRuleOneWay = action.payload;
        },
        setFareRuleSecondWay(state, action) {
            state.fareRuleSecondWay = action.payload;
        },
        setIsFareRuleDone(state, action) {
            state.isFareRuleDone = action.payload;
        }
    }
});

export const fareRuleActions = fareRuleSlice.actions;

export default fareRuleSlice;