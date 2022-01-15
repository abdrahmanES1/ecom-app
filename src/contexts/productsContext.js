import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
export const productsContext = createContext();
productsContext.displayName = "Product";

const ProductsContextProvider = (props) => {
   const [products, setProducts] = useState([]);
   useEffect(() => {
      if (localStorage.getItem("products") !== null) {
         let localProducts = JSON.parse(localStorage.getItem("products"));
         setProducts(localProducts);
         return;
      }
      axios
         .get("https://fakestoreapi.com/products")
         .then((res) => {
            setProducts(res.data);
            return res.data;
         })
         .then((data) => localStorage.setItem("products", JSON.stringify(data)))
         .catch((err) => console.log(err));
   }, []);

   const value = {
      products,
   };
   return (
      <productsContext.Provider value={value}>
         {props.children}
      </productsContext.Provider>
   );
};

export default ProductsContextProvider;
