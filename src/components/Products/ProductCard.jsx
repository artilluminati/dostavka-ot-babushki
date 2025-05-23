import tw from "tailwind-styled-components";
import { useCart } from "../../Context/CartContext";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import { NavLink } from "react-router";
import ProductCounter from "../Buttons/ProductCounter";

export default function ProductCard({
    id,
    imageUrl,
    name,
    price,
    oldPrice,
    weight,
    discount,
    isNew,
    ...props
}) {
    const ProductImg = tw.img`max-w-full object-contain`;

    const ProductThumbnail = tw.div`bg-brand/70 group-hover:bg-brand/100 rounded-4xl transition-colors p-3 relative aspect-square size-[220px]`;
    const ProductButtons = tw.div`flex justify-between items-center absolute bottom-0 left-0 p-3 w-full`;
    const ProductBadges = tw.div`flex flex-col`;

    const ProductInfo = tw.div`flex flex-col py-2 px-1`;

    return (
        <div className="product-card max-w-[220px] group">
            <ProductThumbnail>
                <NavLink to={`/product/${id}`}>
                    <ProductImg src={imageUrl} alt={name} />
                </NavLink>
                <ProductButtons>
                    <ProductBadges>
                        {/* {discount && (
                            <div className="discount-tag">-{discount}%</div>
                        )}
                        {isNew && <div className="new-tag">Новинка</div>} */}
                    </ProductBadges>
                    <ProductCounter product={{ id, name, price, imageUrl }} />
                </ProductButtons>
            </ProductThumbnail>
            <NavLink to={`/product/${id}`}>
                <ProductInfo>
                    <div className="product-price max-w-full">
                        <span
                            className={`current-price font-semibold text-xl ${
                                oldPrice
                                    ? "text-brand-button"
                                    : "text-shadow-brand-brown"
                            }`}
                        >
                            {price} ₽
                        </span>
                        {oldPrice && (
                            <>
                                {" "}
                                <span className="old-price line-through">
                                    {oldPrice} ₽
                                </span>
                            </>
                        )}
                    </div>
                    <h3 className="product-name w-full">
                        <span className="font-medium text-brand-brown/90">
                            {name}
                        </span>
                        <span className="text-gray-400 font-normal">
                            {" "}
                            {weight}
                        </span>
                    </h3>
                </ProductInfo>
            </NavLink>
        </div>
    );
}
