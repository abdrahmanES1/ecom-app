import NavbarResponsive from "../component/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../component/Home";
import Product from "../component/Product";
import ProductsContextProvider from "../contexts/productsContext";
import ShoppingCartContextProvider from "../contexts/shoppingCartContext";
import ShoppingCart from "../component/ShoppingCart";
import NotFound from "../component/NotFound";
const App = () => {
   return (
      <>
         <Router>
            <NavbarResponsive />

            <ProductsContextProvider>
               <ShoppingCartContextProvider>
                  <Routes>
                     <Route exact path="/" element={<Home />} />
                     <Route exact path=":productId" element={<Product />} />
                     <Route
                        exact
                        path="/shoppingcard"
                        element={<ShoppingCart />}
                     />
                     <Route path="/*" element={<NotFound />} />
                  </Routes>
               </ShoppingCartContextProvider>
            </ProductsContextProvider>
         </Router>
      </>
   );
};

export default App;
