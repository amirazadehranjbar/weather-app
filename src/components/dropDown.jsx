import {ChevronDown, ChevronUp, Settings} from "lucide-react";
import {useDispatch, useSelector} from "react-redux";
import {setOpenDropDownMenu} from "../redux/weatherReducer.js";

const DropDown = () => {

    const {isOpenDropDownMenu} = useSelector(state => state.weatherReducer);

    const dispatch = useDispatch();

    return (
        <div className="dropdown-container" >
            <Settings className="icon-setting"/>
            <p>Units</p>

            {isOpenDropDownMenu ? <ChevronUp className="icon-arrow" onClick={() => {
                dispatch(setOpenDropDownMenu())
            }}/> : <ChevronDown className="icon-arrow" onClick={() => {
                dispatch(setOpenDropDownMenu())
            }}/>}



        </div>
    )
}
export default DropDown
