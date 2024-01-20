import {createBrowserRouter} from "react-router-dom"
import {Dashboard} from "../features/Dashboard";

export default createBrowserRouter([
    {
        path: "/",
        element: <Dashboard/>
    }
]);