import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import HeaderNavLink from "./HeaderNavLink";
import CartButton from "../Buttons/CartButton";
import Logo from "../Logo";
import HeaderHashLink from "./HeaderHashLink";

export default function Header() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const { search } = useLocation();

    // Считываем query из URL
    useEffect(() => {
        const q = new URLSearchParams(search).get("q") || "";
        setQuery(q);
    }, [search]);

    const handleSearch = () => {
        if (query.trim()) {
            navigate(`/search?q=${encodeURIComponent(query.trim())}`);
        }
    };

    return (
        <header className="py-4 bg-white">
            <div className="base-container flex justify-between">
                <div className="flex gap-8">
                    <Logo />
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSearch();
                        }}
                        className="flex gap-6 items-center font-bold"
                    >
                        <label
                            htmlFor="headerSearch"
                            className="flex bg-neutral-light px-3.5 py-2.5 rounded-xl gap-4 items-center has-[input:focus]:border-gray-focus border-2 border-transparent desktop:w-[302px]"
                        >
                            <button type="button" onClick={handleSearch}>
                                <MagnifyingGlassIcon className="size-[18px]" />
                            </button>
                            <input
                                type="search"
                                id="headerSearch"
                                placeholder="Найти в каталоге"
                                className="font-medium outline-none active:outline-none focus:outline-none"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                        </label>
                        <HeaderNavLink to="/catalog">Каталог</HeaderNavLink>
                        <HeaderHashLink to="/#about">О нас</HeaderHashLink>
                        <HeaderHashLink to="/#contact">Контакты</HeaderHashLink>
                    </form>
                </div>
                <div>
                    <CartButton />
                </div>
            </div>
        </header>
    );
}
