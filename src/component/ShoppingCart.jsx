import React, { useContext, useState, useEffect } from "react";
import { shoppingCartContext } from "../contexts/shoppingCartContext";
import ShoppingButtons from "./ShoppingButtons";

const ShoppingCart = () => {
   // eslint-disable-next-line no-unused-vars
   const { state, dispatch } = useContext(shoppingCartContext);
   const [cost, setCost] = useState(0);
   const [numberOfCmd, setnumberOfCmd] = useState(0);

   useEffect(() => {
      let testcost = state.shopingProducts.reduce((prv, current) => {
         return prv + current.price * current.quantite;
      }, 0);
      let testquantite = state.shopingProducts.reduce((prv, current) => {
         return prv + current.quantite;
      }, 0);

      setCost(testcost);
      setnumberOfCmd(testquantite);
   }, [state.shopingProducts]);

   return (
      <div className="container">
         <h1 className="text-center my-2">Shopping Card</h1>
         <div className="row">
            <p className="text-center text-muted">
               Number of Products : {numberOfCmd} Cost : {Math.ceil(cost, 1)} $
            </p>
         </div>
         <div className="row justify-content-center">
            {!state.shopingProducts.length ? (
               <div className="text-center display-5 my-5 text-muted">
                  shopping cart is Empty
               </div>
            ) : (
               state.shopingProducts.map((product) => {
                  return (
                     <div style={{ width: "18rem" }} key={product.id}>
                        <div className="p-2 m-2 text-center border border-2 rounded">
                           <img
                              src={product.image}
                              alt="xv"
                              width="100"
                              height="150px"
                           />
                           <p className="p-1 ">
                              {product.title.split(" ", 3).join("")}
                           </p>
                           <p className="display-7 ">{product.price} $</p>
                           <ShoppingButtons
                              id={product.id}
                              quantite={product.quantite}
                           />
                        </div>
                     </div>
                  );
               })
            )}
         </div>
      </div>
   );
};

export default ShoppingCart;
