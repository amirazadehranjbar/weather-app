import {useDispatch, useSelector} from "react-redux";
import {setPrecipitationUnit, setSpeedUnit, setTempUnits} from "../redux/weatherReducer.js";

const DropDownMenu = () => {

    const {isOpenDropDownMenu, tempUnit, speedUnit ,precipitationUnit} = useSelector(state => state.weatherReducer);

    const dispatch = useDispatch();

    {
        return (
            isOpenDropDownMenu ? (<div className="dropdown-menu">

                <div className="dropdown-menu_tempUnit">

                    <p className="dropdown-menu_title">temperature</p>


                    <p className={tempUnit === "C" ? "unit-selected" : "unit"} onClick={() => {
                        dispatch(setTempUnits({tempUnit: "C"}))
                    }}>Celsius (°C)</p>


                    <p className={tempUnit === "F" ? "unit-selected" : "unit"} onClick={() => {
                        dispatch(setTempUnits({tempUnit: "F"}))
                    }}>Fahrenheit (°F)</p>

                    <div className="dropdown-menu_Divider">

                    </div>
                </div>

                <div className="dropdown-menu_speed">


                    <p className="dropdown-menu_title">Wind Speed</p>

                    <p className={speedUnit === "km" ? "unit-selected" : "unit"} onClick={()=>{
                        dispatch(setSpeedUnit({speedUnit:"km"}))
                    }}>km/h</p>


                    <p className={speedUnit === "mph" ? "unit-selected" : "unit"} onClick={()=>{
                        dispatch(setSpeedUnit({speedUnit:"mph"}))
                    }}>mph</p>


                    <div className="dropdown-menu_Divider">
                    </div>


                </div>

                <div className="dropdown-menu_precipitation">
                    <p className="dropdown-menu_title">Precipitation</p>

                    <p className={precipitationUnit === "mm" ? "unit-selected" : "unit"} onClick={()=>{
                        dispatch(setPrecipitationUnit({precipitationUnit:"mm"}))
                    }}>km/h</p>


                    <p className={precipitationUnit === "in" ? "unit-selected" : "unit"} onClick={()=>{
                        dispatch(setPrecipitationUnit({precipitationUnit:"in"}))
                    }}>mph</p>




                </div>


            </div>) : null
        )
    }
}
export default DropDownMenu
