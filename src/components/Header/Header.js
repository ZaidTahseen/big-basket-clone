import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import useProductsContext from "../../hooks/use-products-context";
import { Link } from "react-router-dom";

export const Header = () => {
  const { cart } = useProductsContext();

  const totalItems = cart.reduce(
    (currentNumber, item) => currentNumber + item.quantity,
    0
  );

  return (
    <header className="flex items-center justify-between p-4 bg-blue-500 text-white">
      <Link to="/" className="flex items-center">
        <h1>Big Basket</h1>
      </Link>
      <Link to="/cart" className="flex items-center">
        <FaShoppingCart />
        {totalItems > 0 && <span>({totalItems})</span>}
      </Link>
    </header>
  );
};
