import React, { useContext } from "react"
import "./header.css"
import { Switch as SwitchButton } from "antd"
import darkIcon from "../../assets/icons/clear-night.svg"
import lightIcon from "../../assets/icons/clear-day.svg"
import ThemeContext, { themes } from "../../contexts/themeContext";
import Select from "../select/select"

const Header = () => {
    const [theme, setTheme] = useContext(ThemeContext);
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
                onChange={(checked) => (checked ? setTheme(themes.dark) : setTheme(themes.light))}
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