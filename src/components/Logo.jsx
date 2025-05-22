import { NavLink } from "react-router";
import logo from "/logo.svg";
export default function Logo() {
    return (
        <NavLink to={"/"} className="logo">
            <img src={logo} alt="От Бабушки" />
        </NavLink>
    )
}