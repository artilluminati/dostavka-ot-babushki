import { useCart } from "../Context/CartContext";
import tw from "tailwind-styled-components";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import { NavLink } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Container = tw.div`base-container mx-auto py-10 flex flex-col gap-10`;
const CartItem = tw.div`flex items-center gap-6 border-b border-gray-200 pb-6`;
const Image = tw.img`w-[120px] h-[120px] object-contain rounded-xl bg-gray-50`;
const Info = tw.div`flex flex-col gap-2 flex-1`;
const Title = tw.h2`text-xl font-semibold text-brand-brown`;
const Price = tw.div`text-lg font-semibold text-red-800`;
const ProductCounter = tw.div`bg-white rounded-full w-full flex items-center gap-4 px-4 py-2 border border-gray-300 has-[button:hover]:shadow-xl`;
const CounterButton = tw.button`text-2xl font-bold cursor-pointer`;
const Summary = tw.div`flex justify-between items-center pt-10 border-t border-gray-300 text-xl font-semibold`;
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
                        {cart.map((item) => (
                            <CartItem key={item.id}>
                                <Image src={item.imageUrl} alt={item.name} />
                                <Info>
                                    <Title>{item.name}</Title>
                                    <Price>
                                        {item.price} ₽ × {item.quantity} ={" "}
                                        <span className="text-brand-brown">
                                            {item.price * item.quantity} ₽
                                        </span>
                                    </Price>
                                    <ProductCounter>
                                        <CounterButton
                                            onClick={() =>
                                                decreaseQuantity(item.id)
                                            }
                                        >
                                            <MinusIcon className="size-6" />
                                        </CounterButton>
                                        <span className="text-xl font-mono">
                                            {item.quantity}
                                        </span>
                                        <CounterButton
                                            onClick={() => addToCart(item)}
                                        >
                                            <PlusIcon className="size-6" />
                                        </CounterButton>
                                    </ProductCounter>
                                </Info>
                            </CartItem>
                        ))}

                        <Summary>
                            <span>Итого:</span>
                            <span>{total} ₽</span>
                        </Summary>

                        <div className="text-right">
                            <NavLink
                                to="/checkout"
                                className="inline-block bg-brand text-white text-lg font-medium px-6 py-3 rounded-full shadow-md hover:bg-brand-dark transition"
                            >
                                Оформить заказ
                            </NavLink>
                        </div>
                    </>
                )}
            </Container>
            <Footer />
        </>
    );
}
