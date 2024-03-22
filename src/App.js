import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Products } from "./components/Products/Products";
import { Cart } from "./components/Cart/Cart";
import { Header } from "./components/Header/Header";
import useProductsContext from "./hooks/use-products-context";

function App() {
  const { fetchProducts } = useProductsContext();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
