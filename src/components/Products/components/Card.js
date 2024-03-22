import { Select } from "./Select";
import React, { useState } from "react";
import useProductsContext from "../../../hooks/use-products-context";
import { Button } from "../../../common/Button";

export const Card = ({ product }) => {
  const { addToCart } = useProductsContext();
  const [selectedUnit, setSelectedUnit] = useState(product.unitOptions[0]);

  const handleUnitSelect = (e) => {
    const selectedId = e.target.value;
    const selectedOption = product.unitOptions.find(
      (option) => option.id === selectedId
    );
    setSelectedUnit(selectedOption);
  };

  const handleAddToCart = () => {
    const itemToAdd = {
      ...product,
      selectedUnit: selectedUnit,
    };
    addToCart(itemToAdd);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full h-48 object-cover"
        src={product.imageUrl}
        alt={product.name}
      />
      <div className="px-6 py-4">
        <p className="text-gray-700 text-base mb-1">{product.company}</p>
        <h3 className="font-bold text-xl mb-2">{product.name}</h3>
        <p className="text-gray-700 text-base">{product.description}</p>
        <div className="my-3">
          <Select
            unitOptions={product.unitOptions}
            onSelect={handleUnitSelect}
            className="block w-full p-2 border rounded"
          />
        </div>
        <div className="pricing-info">
          <strong className="text-lg">{selectedUnit.price}</strong>
          {selectedUnit.discount && (
            <>
              <span className="ml-2 text-sm text-green-600">
                {selectedUnit.discount} OFF
              </span>
              <span className="ml-2 text-sm text-gray-500 line-through">
                {selectedUnit.originalPrice}
              </span>
            </>
          )}
        </div>
        <Button
          onClick={handleAddToCart}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};
