import Header from "../components/Header/Header.jsx";
import Section from "../components/Products/Section.jsx";
import ProductCard from "../components/Products/ProductCard.jsx";
import Footer from "../components/Footer/Footer.jsx";
import PRODUCTS_DATA from "../assets/data/products.js";
import tw from "tailwind-styled-components";

export default function Catalog() {
    const CatalogMain = tw.main`base-container mt-[120px] flex flex-col gap-y-5`;
    const CatalogProductsGrid = tw.div`flex gap-4`;

    return (
        <>
            <Header />

            <CatalogMain>
                {/* Основные категории */}
                {PRODUCTS_DATA.categories.map((category) => (
                    <Section key={category.id} title={category.title}>
                        <CatalogProductsGrid>
                            {category.products.map((product) => (
                                <ProductCard key={product.id} {...product} />
                            ))}
                        </CatalogProductsGrid>
                    </Section>
                ))}

                {/* Новинки */}
                <Section title="Новинки От Бабушки">
                    <div className="products-grid">
                        {PRODUCTS_DATA.categories
                            .flatMap((cat) => cat.products)
                            .filter((product) => product.isNew)
                            .map((product) => (
                                <ProductCard key={product.id} {...product} />
                            ))}
                    </div>
                </Section>
            </CatalogMain>

            <Footer className="mt-[150px]" />
        </>
    );
}
