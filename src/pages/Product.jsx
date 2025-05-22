import { useParams } from "react-router-dom";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import PRODUCTS_DATA from "../assets/data/products.js";
import { useCart } from "../Context/CartContext";
import tw from "tailwind-styled-components";
import {
    MinusIcon,
    PlusIcon,
    ShoppingCartIcon,
} from "@heroicons/react/20/solid";

const Container = tw.div`base-container mx-auto py-10 flex flex-col md:flex-row gap-10`;
const Image = tw.img`w-full md:w-1/2 object-contain rounded-xl bg-gray-50`;
const Info = tw.div`flex flex-col gap-4 md:w-1/2`;
const Title = tw.h1`text-4xl font-bold text-brand-brown`;
const WeightTitle = tw.h2`text-4xl font-semibold text-brand-brown/70`;
const Price = tw.div`text-3xl font-semibold text-red-800`;
const Description = tw.p`text-gray-700 text-base`;
const ProductCounter = tw.div`bg-white rounded-full flex items-center gap-4 px-4 py-2 w-fit border border-gray-300 has-[button:hover]:shadow-xl`;
const CounterButton = tw.button`text-3xl font-bold cursor-pointer`;

export default function Product() {
    const { id } = useParams();
    const { cart, addToCart, decreaseQuantity } = useCart();

    const product = PRODUCTS_DATA.categories
        .flatMap((cat) => cat.products)
        .find((p) => String(p.id) === id);

    const quantity =
        cart.find((item) => item.id === product?.id)?.quantity || 0;

    return (
        <>
            <Header />
            <main>
                {product ? (
                    <>
                        <div className="base-container mt-8">
                            <Title>{product.name}</Title>
                            <WeightTitle>{product.weight}</WeightTitle>
                        </div>
                        <Container>
                            <Image src={product.imageUrl} alt={product.name} />
                            <Info>
                                <div className="flex items-center justify-between">
                                    <Price>{product.price} ₽</Price>
                                    <ProductCounter>
                                        {quantity > 0 && (
                                            <>
                                                <CounterButton
                                                    onClick={() =>
                                                        decreaseQuantity(
                                                            product.id
                                                        )
                                                    }
                                                >
                                                    <MinusIcon className="size-8" />
                                                </CounterButton>
                                                <span className="text-xl font-mono">
                                                    {quantity}
                                                </span>
                                            </>
                                        )}
                                        <CounterButton
                                            onClick={() =>
                                                addToCart({
                                                    id: product.id,
                                                    name: product.name,
                                                    price: product.price,
                                                    imageUrl: product.imageUrl,
                                                })
                                            }
                                        >
                                            {quantity === 0 ? (
                                                <div className="flex items-center gap-2">
                                                    <span className="text-base font-medium">
                                                        В корзину
                                                    </span>
                                                    <ShoppingCartIcon className="size-6 p-1 box-content" />
                                                </div>
                                            ) : (
                                                <PlusIcon className="size-8" />
                                            )}
                                        </CounterButton>
                                    </ProductCounter>
                                </div>
                                {product.description && (
                                    <Description>
                                        {product.description}
                                    </Description>
                                )}
                            </Info>
                        </Container>
                    </>
                ) : (
                    <div className="text-center py-20 text-xl">
                        Товар не найден
                    </div>
                )}
            </main>
            <Footer className="mt-[150px]" />
        </>
    );
}
