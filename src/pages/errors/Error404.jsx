import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Button } from "../../components/BrandButton";
import { NavLink, useNavigate } from "react-router";

export default function Error404() {
    const navigate = useNavigate();

    return (
        <div className="h-[100vh] flex flex-col justify-between overflow-y-scroll">
            <Header />
            <section className="base-container flex flex-col items-center gap-y-9">
                <h1 className="text-4xl font-black">
                    Такой страницы не существует
                </h1>
                <div className="flex flex-col gap-4 w-[20cqw]">
                    <NavLink to={"/"}>
                        <Button variant="outline" className="w-full">
                            На главную
                        </Button>
                    </NavLink>
                </div>
            </section>
            <Footer />
        </div>
    );
}
