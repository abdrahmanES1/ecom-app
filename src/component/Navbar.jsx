import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { shoppingCartContext } from "../contexts/shoppingCartContext";
import { useContext } from "react";
const NavbarResponsive = () => {
   const {
      state: { shopingProducts },
   } = useContext(shoppingCartContext);

   return (
      <Navbar bg="dark" variant="dark" sticky="top">
         <Container>
            <Link className="navbar-brand" to="/">
               Navbar
            </Link>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
               <div className="navbar-nav">
                  <Link className="nav-link" to="/">
                     Home
                  </Link>
                  <Link
                     className="nav-link position-relative"
                     to="/shoppingcard"
                  >
                     Shopping Cart
                     <span className="position-absolute top-1 start-100 translate-middle badge rounded-pill bg-danger">
                        {shopingProducts.lenght}+
                        <span className="visually-hidden">unread messages</span>
                     </span>
                  </Link>
               </div>
            </div>
         </Container>
      </Navbar>
   );
};
export default NavbarResponsive;
