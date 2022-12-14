import React from "react"
import "./header.css"
import { Switch as SwitchButton } from "antd"
import darkIcon from "../../assets/icons/clear-night.svg"
import lightIcon from "../../assets/icons/clear-day.svg"
import { toggleTempUnits } from "../../redux/weatherSlice";
import { toggleDarkMode } from "../../redux/darkModeSlice"
import { useDispatch } from 'react-redux'
import Select from "../select/select"

const Header = () => {
    const dispatch = useDispatch();
    return (
        <div className="header">
            <SwitchButton
                checkedChildren={
                    <img
                        src={darkIcon}
                        alt="moonIcon"
                        width="25"
                        height="25"
                    />
                }
                unCheckedChildren={
                    <img
                        src={lightIcon}
                        alt="sunIcon"
                        width="25"
                        height="25"
                    />
                }
                style={{ background: "#00000040", margin: "30px 0 0 30px", minWidth: "60px", height: "30px" }}
                onChange={(checked) => (checked ? dispatch(toggleDarkMode()) : dispatch(toggleDarkMode()))}
            />
            <SwitchButton
                checkedChildren={'F'}
                unCheckedChildren={'C'}
                style={{ background: "#00000040", margin: "30px 0 0 30px", minWidth: "60px", height: "30px" }}
                onChange={(checked) => (checked ? dispatch(toggleTempUnits()) : dispatch(toggleTempUnits()))}
            />
            <div className="container">
            <div className="title">Weather by city</div>
                <div className="select">
                    <Select />
                </div>
            </div>
        </div>
    )
}

export default Header