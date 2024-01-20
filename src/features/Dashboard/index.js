import {useDispatch, useSelector} from "react-redux";
import {actions} from "../../app/slice/dashboardSlice";
import style from "./dashboard.module.css";

export function Dashboard() {

    const name = useSelector((state) => state.dashboard.name);
    const dispatch = useDispatch();

    const handleChangeName = (event)=> {
        dispatch(actions.append({
            key: "name",
            value: "1"
        }))
    }

    return <div className={`${style.dashboard}`}>
        {name}

        <button onClick={handleChangeName}>Change Name</button>
    </div>
}