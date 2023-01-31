import React from "react";
import { Switch as SwitchButton } from "antd"
import darkIcon from "../../assets/icons/clear-night.svg"
import lightIcon from "../../assets/icons/clear-day.svg"
import { toggleTempUnits } from "../../redux/weatherSlice";
import { toggleDarkMode } from "../../redux/darkModeSlice"
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'

import "./Header.css"

const Header = () => {
    const dispatch = useDispatch();

    return (
        <div className="navigation">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/favorites">Favorites</Link>
                    </li>
                </ul>
            </nav>

            <div className="switch-buttons">
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
                    style={{ background: "#00000040", minWidth: "60px", height: "30px" }}
                    onChange={(checked) => (checked ? dispatch(toggleDarkMode()) : dispatch(toggleDarkMode()))}
                />
                <SwitchButton
                    checkedChildren={'F'}
                    unCheckedChildren={'C'}
                    style={{ background: "#00000040", margin: '0 30px 0 30px', minWidth: "60px", height: "30px" }}
                    onChange={(checked) => (checked ? dispatch(toggleTempUnits()) : dispatch(toggleTempUnits()))}
                />
            </div>
        </div>
    )
}

export default Header