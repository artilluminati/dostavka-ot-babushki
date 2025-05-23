import { useCart } from "../Context/CartContext";
import tw from "tailwind-styled-components";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import { NavLink } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Button } from "../components/BrandButton";
import ProductCounter from "../components/Buttons/ProductCounter";

const Container = tw.div`base-container mx-auto py-10 flex gap-10 flex-grow`;
const CartItem = tw.div`flex items-center gap-6 border-b border-gray-200 py-6 first:pt-0 last:border-0`;
const Image = tw.img`w-[120px] h-[120px] object-contain rounded-xl bg-gray-50`;
const Info = tw.div`flex flex-col gap-2 flex-1`;
const Title = tw.h2`text-xl font-semibold text-brand-brown`;
const Price = tw.div`text-lg font-semibold text-red-800`;
const Summary = tw.div`flex flex-col justify-between border-gray-300 text-xl font-semibold`;
const EmptyMessage = tw.div`text-center text-xl text-gray-500 py-20`;

export default function Cart() {
    const { cart, addToCart, decreaseQuantity } = useCart();

    const total = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    return (
        <>
            <Header />
            <Container>
                {cart.length === 0 ? (
                    <EmptyMessage>Корзина пуста</EmptyMessage>
                ) : (
                    <>
                        <div className="flex-grow">
                            {cart.map((item) => (
                                <CartItem key={item.id}>
                                    <NavLink to={`/product/${item.id}`}>
                                        <Image
                                            src={item.imageUrl}
                                            alt={item.name}
                                        />
                                    </NavLink>
                                    <Info>
                                        <NavLink to={`/product/${item.id}`}>
                                            <Title>{item.name}</Title>
                                        </NavLink>
                                        <Price>
                                            {item.price} ₽ {"\u00d7"}{" "}
                                            {item.quantity} ={" "}
                                            <span className="text-brand-brown">
                                                {item.price * item.quantity} ₽
                                            </span>
                                        </Price>
                                        <ProductCounter product={item} />
                                    </Info>
                                </CartItem>
                            ))}
                        </div>

                        <div className="flex flex-col w-[20cqw] gap-y-4">
                            <Summary>
                                <span>Итого:</span>
                                <span className="text-3xl">{total} ₽</span>
                            </Summary>

                            <Button>
                                <NavLink to="/checkout">Оформить заказ</NavLink>
                            </Button>
                        </div>
                    </>
                )}
            </Container>
            <Footer />
        </>
    );
}
