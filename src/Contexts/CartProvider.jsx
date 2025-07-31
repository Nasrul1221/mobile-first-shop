import React, { useReducer } from "react";
import { CartContext } from "./CartContext";

const initialState = { cart: [] };

function reducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const itemExist = state.cart.find(
        (product) => product.id === action.payload.id
      );
      if (itemExist) {
        return {
          ...state,
          cart: state.cart.map((product) =>
            product.id === action.payload.id
              ? {
                  ...product,
                  quantity: product.quantity + action.payload.quantity,
                }
              : product
          ),
        };
      }

      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    }

    case "DELETE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload.id),
      };

    case "INCREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
      };

    case "DECREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((product) =>
          product.id === action.payload.id
            ? product.quantity > 1
              ? { ...product, quantity: product.quantity - 1 }
              : product
            : product
        ),
      };

    // return {
    //   ...state,
    //   cart: [...state.cart,  ],
    // };
  }
}

export default function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
