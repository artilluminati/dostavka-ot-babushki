import { useLocation } from "react-router-dom";
import PRODUCTS_DATA from "../assets/data/products";
import tw from "tailwind-styled-components";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ProductCard from "../components/Products/ProductCard";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const Container = tw.div`base-container py-10 h-full flex-grow`;
const Title = tw.h1`text-2xl font-bold mb-6`;

export default function SearchResults() {
    const { search } = useLocation();
    const query = new URLSearchParams(search).get("q") || "";

    const navigate = useNavigate();

    useEffect(() => {
        if (!query.trim()) {
            navigate("/catalog", { replace: true });
        }
    }, [query, navigate]);

    const filteredProducts = PRODUCTS_DATA.categories.flatMap((category) =>
        category.products.filter((product) => {
            return (
                product.name.toLowerCase().includes(query.toLowerCase()) &
                product.description?.toLowerCase().includes(query.toLowerCase())
            );
        })
    );

    return (
        <>
            <Header />
            <Container>
                <Title>{`Результаты поиска: "${query}"`}</Title>
                <div className="flex flex-wrap gap-6">
                    {filteredProducts.length === 0 ? (
                        <div>Ничего не найдено</div>
                    ) : (
                        filteredProducts.map((product) => (
                            <ProductCard key={product.id} {...product} />
                        ))
                    )}
                </div>
            </Container>
            <Footer />
        </>
    );
}
