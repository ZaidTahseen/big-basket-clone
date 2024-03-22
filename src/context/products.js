import { createContext, useReducer, useCallback } from "react";
import { productsList } from "../constant";

const ProductsContext = createContext();

const defaultState = {
  products: [],
  cart: [],
};

const productsReducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    case "ADD_TO_CART":
      // Create a new item with quantity set to 1 for adding to cart.
      const newItem = { ...action.payload, quantity: 1 };

      // Simply add the new item to the cart array.
      const updatedCart = [...state.cart, newItem];

      return { ...state, cart: updatedCart };
    default:
      return state;
  }
};

function Provider({ children }) {
  const [state, dispatch] = useReducer(productsReducer, defaultState);

  const fetchProducts = useCallback(() => {
    dispatch({ type: "SET_PRODUCTS", payload: productsList });
  }, []);

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const valueToShare = {
    ...state,
    fetchProducts,
    addToCart,
  };

  return (
    <ProductsContext.Provider value={valueToShare}>
      {children}
    </ProductsContext.Provider>
  );
}

export { Provider };
export default ProductsContext;
