import { ShoppingCartIcon } from "@heroicons/react/16/solid";
import { NavLink } from "react-router";
import { useCart } from "../../Context/CartContext";

export default function CartButton() {
    const { cart } = useCart();

    // считаем общее количество штук всех товаров
    const totalItems = Array.isArray(cart)
        ? cart.reduce((sum, item) => sum + (item.quantity || 0), 0)
        : 0;
    return (
        <NavLink
            to={"/cart"}
            className="flex items-center gap-3 bg-brand-button hover:bg-brand-button/70 p-3 rounded-xl cursor-pointer"
        >
            <ShoppingCartIcon className="fill-white size-4.5" />
            <span className="text-white font-medium">
                {totalItems > 0 ? totalItems : "Корзина"}
            </span>
        </NavLink>
    );
}
