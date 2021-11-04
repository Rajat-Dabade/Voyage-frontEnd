import { createSlice } from "@reduxjs/toolkit";

let initialPassengerStatus = {
  travellers: [],
  gstNumber: "",
  companyGstEmail: "",
  companyName: "",
  passengerType: [],
  phoneNumber: "",
  email: "",
  address: "",
  isProceedToBook: false,
  isGSTChecked: false,
};

const passengerSlice = createSlice({
    name: 'passengerSlice',
    initialState: initialPassengerStatus,
    reducers: {
        setTravellers(state, action) {
            if(state.travellers.length === 0) {
                state.travellers = [action.payload];
            } else {
                state.travellers = [...state.travellers, action.payload];
            }
        },
        setTravellersInformation(state, action) {
            state.travellers = action.payload;
        },
        setGstNumber(state, action) {
            state.gstNumber = action.payload;
        },
        setCompanyName(state, action) {
            state.companyGstEmail = action.payload;
        },
        setPassengerType(state, action) {
            if(state.passengerType.length === 0) {
                state.passengerType = [action.payload];
            } else {
                state.passengerType = [...state.passengerType, action.payload];
            }
        },
        setPhoneNumber(state, action) {
            state.phoneNumber = action.payload;
        },
        setEmail(state, action) {
            state.email = action.payload;
        },
        setAddress(state, action) {
            state.address = action.payload;
        },
        setIsProceedToBook(state, action) {
            state.isProceedToBook = action.payload;
        },
        setIsGSTChecked(state, action) {
            state.isGSTChecked = action.payload;
        },
        changeTravellerInfo(state, action) {
            state.travellers[action.payload.index][action.payload.name] = action.payload.value;
        },
        emptyTravellerArray(state) {
            while(state.travellers.length > 0) {
                state.travellers.pop();
            }
        },
        emptyPassengerTypeArray(state) {
            while(state.passengerType.length > 0) {
                state.passengerType.pop();
            }
        }
    }
});

export const passengerActions = passengerSlice.actions;

export default passengerSlice;
