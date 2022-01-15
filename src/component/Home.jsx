import CardsContainer from "../container/CardsContainer";
import ProductsContextProvider from "../contexts/productsContext";
import ShoppingCartContextProvider from "../contexts/shoppingCartContext";
const Home = () => {
   return (
      <>
         <ProductsContextProvider>
            <ShoppingCartContextProvider>
               <CardsContainer />
            </ShoppingCartContextProvider>
         </ProductsContextProvider>
      </>
   );
};

export default Home;
