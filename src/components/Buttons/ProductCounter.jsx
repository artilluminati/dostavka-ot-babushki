import tw from "tailwind-styled-components";
import {
    MinusIcon,
    PlusIcon,
    ShoppingCartIcon,
} from "@heroicons/react/20/solid";
import { useCart } from "../../Context/CartContext";

/**
 * A component that displays a product counter with increment and decrement buttons.
 *
 * @param {Object} props - The properties object.
 * @param {Object} props.product - The product object containing id, name, price, and imageUrl.
 * @param {string} [props.type="mini"] - The type of counter, either "mini" or "full".
 *
 * This component displays the current quantity of the product in the cart.
 * If the quantity is greater than zero, it shows decrement and increment buttons.
 * If the quantity is zero and type is "full", it shows an "Add to Cart" button with a label.
 * The component uses the CartContext to manage the product's quantity in the cart.
 */

export default function ProductCounter({ product, type = "mini" }) {
    const CounterContainer = tw.div`bg-white rounded-full flex items-center gap-4 px-2 py-2 w-fit border border-gray-300 has-[button:hover]:shadow-xl`;
    const CounterButton = tw.button`text-3xl font-bold cursor-pointer`;

    const { cart, addToCart, decreaseQuantity } = useCart();

    const quantity =
        cart.find((item) => item.id === product?.id)?.quantity || 0;

    return (
        <CounterContainer>
            {quantity > 0 && (
                <>
                    <CounterButton onClick={() => decreaseQuantity(product.id)}>
                        <MinusIcon className="size-8" />
                    </CounterButton>
                    <span className="text-xl font-mono">{quantity}</span>
                </>
            )}
            <CounterButton
                onClick={(e) =>
                    addToCart({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        imageUrl: product.imageUrl,
                    })
                }
            >
                {(quantity === 0) & (type === "full") ? (
                    <div className="flex items-center gap-2 px-2">
                        <span className="text-base font-medium">В корзину</span>
                        <ShoppingCartIcon className="size-6 p-1 box-content" />
                    </div>
                ) : (
                    <PlusIcon className="size-8" />
                )}
            </CounterButton>
        </CounterContainer>
    );
}
