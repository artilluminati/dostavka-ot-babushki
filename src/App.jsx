import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import { CartProvider } from "./Context/CartContext";
import Error404 from "./pages/errors/Error404";
import Catalog from "./pages/Catalog";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import SearchResults from "./pages/SearchResults";

function App() {
    return (
        <CartProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/product/:id" element={<Product />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/search" element={<SearchResults />} />
                    <Route path="*" element={<Error404 />} />
                </Routes>
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;
