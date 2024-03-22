import React from "react";
import useProductsContext from "../../hooks/use-products-context";

export const Cart = () => {
  const { cart } = useProductsContext();

  const cartList = cart.map((item, index) => (
    <div
      key={index}
      className="border-b last:border-b-0 py-4 flex items-center"
    >
      {/* Image Container */}
      <div className="w-20 h-20 mr-4 flex-shrink-0">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      {/* Content Container */}
      <div className="flex-grow">
        <h4 className="text-lg font-semibold">{item.name}</h4>
        <div className="flex justify-between items-center mt-1">
          <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
          <p className="text-sm text-gray-600">
            Size:{" "}
            <span className="font-semibold">{item?.selectedUnit?.label}</span>
          </p>
          <p className="text-sm text-gray-600">
            Price per item:{" "}
            <span className="font-semibold">${item?.selectedUnit?.price}</span>
          </p>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="max-w-4xl mx-auto mt-10 shadow-lg">
      <div className="bg-white p-5">
        <h2 className="text-2xl font-semibold mb-5">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-600 text-center">Your cart is empty</p>
        ) : (
          <>{cartList}</>
        )}
      </div>
    </div>
  );
};
