import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import { CartProvider } from "./Context/CartContext";

function App() {
    return (
        <CartProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;
