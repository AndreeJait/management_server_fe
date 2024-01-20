import {createSlice} from "@reduxjs/toolkit";
import defaultAction from "./defaultAction";

const initialState = {
    name: "Andree Panjaitan",
    testArr: [],
    testObj: {},
}

export const dashboardSlice = createSlice({
   name: 'dashboard',
    initialState: initialState,
    reducers: {
       ...defaultAction,
    }
});


export const actions = dashboardSlice.actions;

export default dashboardSlice.reducer;