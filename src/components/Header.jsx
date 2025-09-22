import React from 'react'
import DropDown from "./dropDown.jsx";
import DropDownMenu from "./dropDownMenu.jsx";


const Header = () => {
    return (
        <div className="header">
            <img src="../../src/assets/images/logo.svg" alt=""/>
           <DropDown/>
            <DropDownMenu/>


        </div>

    )
}
export default Header
