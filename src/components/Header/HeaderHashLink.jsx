import { HashLink as NavLink } from "react-router-hash-link";

export default function HeaderHashLink({ to, className = "", children }) {
    const styles = `font-bold text-base text-brand-brown hover:text-brand-brown/70 ${className}`;
    return (
        <NavLink to={to} className={styles}>
            {children}
        </NavLink>
    );
}
