import { NavLink } from "react-router";

export default function HeaderNavLink({ to, className = "", children }) {
    const styles = `font-bold text-base text-brand-brown hover:text-brand-brown/70 ${className}`;
    return (
        <NavLink to={to} className={styles}>
            {children}
        </NavLink>
    );
}
