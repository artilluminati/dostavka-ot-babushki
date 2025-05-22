import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router";
import { useCart } from "../../Context/CartContext";

export default function CartButton() {
    const { cart } = useCart();

    // Общая стоимость всех товаров в корзине
    const totalPrice = Array.isArray(cart)
        ? cart.reduce((sum, item) => sum + item.price * (item.quantity || 0), 0)
        : 0;

    return (
        <NavLink
            to={"/cart"}
            className="flex items-center gap-3 bg-brand-button hover:bg-brand-button/70 p-3 rounded-xl cursor-pointer"
        >
            <ShoppingCartIcon className="stroke-white size-4.5" />
            <span className="text-white font-medium">
                {totalPrice > 0 ? `${totalPrice} ₽` : "Корзина"}
            </span>
        </NavLink>
    );
}
