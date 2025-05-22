import tw from "tailwind-styled-components";
import { useCart } from "../../Context/CartContext";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import { NavLink } from "react-router";

export default function ProductCard({
    id,
    imageUrl,
    name,
    price,
    oldPrice,
    discount,
    isNew,
}) {
    const { cart, addToCart, decreaseQuantity } = useCart();

    const productInCart = cart.find((item) => item.id === id);
    const quantity = productInCart?.quantity || 0;

    const ProductImg = tw.img`max-w-full object-contain`;

    const ProductThumbnail = tw.div`bg-brand rounded-4xl p-3 relative aspect-square size-[220px]`;
    const ProductButtons = tw.div`flex justify-between items-center absolute bottom-0 left-0 p-3 w-full`;
    const AddToCartButton = tw.button` text-4xl font-bold cursor-pointer`;
    const ProductBadges = tw.div`flex flex-col`;
    const ProductCounter = tw.div`bg-white p-1 rounded-full flex items-center gap-4 has-[button:hover]:shadow-xl`;

    const ProductInfo = tw.div`flex flex-col py-2 px-1`;

    return (
        <NavLink className="product-card max-w-[220px]" to={`/product/${id}`}>
            <ProductThumbnail>
                <ProductImg src={imageUrl} alt={name} />
                <ProductButtons>
                    <ProductBadges>
                        {/* {discount && (
                            <div className="discount-tag">-{discount}%</div>
                        )}
                        {isNew && <div className="new-tag">Новинка</div>} */}
                    </ProductBadges>
                    <ProductCounter>
                        {quantity > 0 ? (
                            <>
                                <AddToCartButton
                                    onClick={(e) => {
                                        e.preventDefault();
                                        decreaseQuantity(id);
                                    }}
                                >
                                    <MinusIcon className="size-10" />
                                </AddToCartButton>
                                <span className="text-2xl font-medium font-mono">
                                    {quantity}
                                </span>
                            </>
                        ) : (
                            ""
                        )}

                        <AddToCartButton
                            onClick={(e) => {
                                e.preventDefault();
                                addToCart({ id, name, price, imageUrl });
                            }}
                        >
                            <PlusIcon className="size-10" />
                        </AddToCartButton>
                    </ProductCounter>
                </ProductButtons>
            </ProductThumbnail>
            <ProductInfo>
                <div className="product-price max-w-full">
                    <span
                        className={`current-price font-semibold text-xl ${
                            oldPrice
                                ? "text-red-800"
                                : "text-shadow-brand-brown"
                        }`}
                    >
                        {price} ₽
                    </span>
                    {oldPrice && (
                        <span className="old-price">{oldPrice} ₽</span>
                    )}
                </div>
                <span className="product-name w-full">{name}</span>
            </ProductInfo>
        </NavLink>
    );
}
