import logo from "/logo.svg";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { NavLink } from "react-router";
import HeaderNavLink from "./HeaderNavLink";
import CartButton from "../Buttons/CartButton";

export default function Header() {
    return (
        <header className="py-4 bg-white">
            <div className="base-container flex justify-between">
                <div className="flex gap-8">
                    <div className="logo">
                        <img src={logo} alt="От Бабушки" />
                    </div>
                    <div className="flex gap-6 items-center font-bold">
                        <label
                            htmlFor="headerSearch"
                            className="flex bg-neutral-light px-3.5 py-2.5 rounded-xl gap-4 items-center has-[input:focus]:border-gray-focus  border-2 border-transparent desktop:w-[302px]"
                        >
                            <MagnifyingGlassIcon className="size-[18px]" />
                            <input
                                type="search"
                                id="headerSearch"
                                placeholder="Найти в каталоге"
                                className="font-medium outline-none active:outline-none focus:outline-none"
                            />
                        </label>
                        <HeaderNavLink to="/catalog">Каталог</HeaderNavLink>
                        <HeaderNavLink to="/#about">О нас</HeaderNavLink>
                        <HeaderNavLink to="/#contact">Контакты</HeaderNavLink>
                    </div>
                </div>
                <div>
                    <CartButton />
                </div>
            </div>
        </header>
    );
}
