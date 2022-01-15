import {
   ADD_PRODUCT,
   DELETE_PRODUCT,
   MODIFY_QUANTITE_PRODUCT,
} from "./shCart.Types";

const shopingCartReducer = (state, action) => {
   switch (action.type) {
      case ADD_PRODUCT:
         let newProduct = state.shopingProducts.find(
            (product) => product.id === action.payload.id
         );
         if (newProduct !== undefined) {
            newProduct.quantite += action.payload.quantite;
            return {
               shopingProducts: [
                  ...state.shopingProducts.filter(
                     (product) => action.payload.id !== product.id
                  ),
                  newProduct,
               ],
            };
         }

         return { shopingProducts: [...state.shopingProducts, action.payload] };

      case DELETE_PRODUCT:
         return {
            shopingProducts: [
               ...state.shopingProducts.filter(
                  (product) => action.payload.id !== product.id
               ),
            ],
         };

      case MODIFY_QUANTITE_PRODUCT:
         let product = state.shopingProducts.find(
            (product) => product.id === action.payload.id
         );
         product.quantite = action.payload.quantite;
         return {
            shopingProducts: [
               ...state.shopingProducts.filter(
                  (product) => action.payload.id !== product.id
               ),
               product,
            ],
         };

      default:
         // return state;
         throw new Error(` this action.type : {${action.type}} not defined`);
   }
};

export default shopingCartReducer;
