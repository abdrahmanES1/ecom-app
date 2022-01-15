import { createContext, useReducer } from "react";
import React from "react";
import shopingCartReducer from "./shCart.Reducer";
export const shoppingCartContext = createContext();
shoppingCartContext.displayName = "shoppingCardContext";

function ShoppingCartContextProvider(props) {
   const initState = { shopingProducts: [] };
   const [state, dispatch] = useReducer(shopingCartReducer, initState);
   const value = {
      state,
      dispatch,
   };
   return (
      <shoppingCartContext.Provider value={value}>
         {props.children}
      </shoppingCartContext.Provider>
   );
}

export default ShoppingCartContextProvider;
