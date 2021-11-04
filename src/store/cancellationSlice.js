import {createSlice} from '@reduxjs/toolkit';

const initialCancelledStatus = {
    cancelledBooking: [],
    cancellationStatusModel: false,
    ChangeRequestId: '',
    cancelledStatus: {}
};

const cancellationSlice = createSlice({
    name: 'cancellationSlice',
    initialState: initialCancelledStatus,
    reducers: {
        setCancelledBooking(state, action) {
            state.cancelledBooking = action.payload
        },
        setCancellationStatusModel(state, action) {
            state.cancellationStatusModel = action.payload;
        },
        setChangeRequestId(state, action) {
            state.ChangeRequestId = action.payload;
        },
        setCancelledStatus(state, action) {
            state.cancelledStatus = action.payload;
        }
    }
});

export const cancellationActions = cancellationSlice.actions;

export default cancellationSlice;