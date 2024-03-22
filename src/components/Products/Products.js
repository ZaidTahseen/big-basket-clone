import React, { useState } from "react";
import { Card } from "./components/Card";
import { EmptyProduct } from "../EmptyProduct/EmptyProduct";
import { SearchBar } from "../SearchBar/SearchBar";
import useProductsContext from "../../hooks/use-products-context";

export const Products = () => {
  const { products } = useProductsContext();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm.toLowerCase());
  };

  // // Filter products based on the search term
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm) ||
      String(product.id) === searchTerm
  );

  if (products.length === 0) {
    return <EmptyProduct />;
  }

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <div className="container mx-auto px-4">
      <h1 className="text-2xl font-semibold mb-5">Product List</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};
