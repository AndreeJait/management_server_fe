import {configureStore} from "@reduxjs/toolkit";
import dashboardReducer from "./slice/dashboardSlice";

export default configureStore({
    reducer: {
        dashboard: dashboardReducer,
    },
});