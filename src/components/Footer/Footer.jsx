import HeaderHashLink from "../Header/HeaderHashLink";
import HeaderNavLink from "../Header/HeaderNavLink";
import Logo from "../Logo";
import logo from "/logo.svg";

export default function Footer({className = ""}) {
    const baseColumnClass = `flex flex-col gap-y-4`;

    return (
        <footer className={`gap-y-12 flex flex-col py-9 bg-neutral-light ${className}`}>
            <div className="base-container">
                <Logo/>
            </div>
            <div className="base-container flex gap-x-6">
                <div className={`${baseColumnClass} w-[20cqw]`}>
                    <HeaderNavLink to={"/"}>Главная</HeaderNavLink>
                    <HeaderNavLink to={"/catalog"}>Каталог</HeaderNavLink>
                    <HeaderHashLink to={"/#about"}>О нас</HeaderHashLink>
                    <HeaderHashLink to={"/#contact"}>Контакты</HeaderHashLink>
                </div>
                <div className={`${baseColumnClass} w-[30cqw]`}>
                    <HeaderNavLink to={"/partner/providers"}>Для поставщиков</HeaderNavLink>
                    <HeaderNavLink to={"/partner/courier"}>Стать курьером-парнёром</HeaderNavLink>
                </div>
                <div className={`${baseColumnClass} w-[30cqw]`}>
                    <HeaderNavLink to={"/help"}>Линия тех. поддержки</HeaderNavLink>
                    <HeaderNavLink to={"/rules"}>Правила и соглашения</HeaderNavLink>
                    <HeaderNavLink to={"/policy"}>Политика конфиденциальности</HeaderNavLink>
                </div>
            </div>

            <div className="base-container">
                <p className="font-medium">Доставка От Бабушки © 2025</p>
            </div>
        </footer>
    );
}
