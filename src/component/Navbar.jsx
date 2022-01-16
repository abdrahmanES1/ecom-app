import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarResponsive = () => {
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
                  </Link>
               </div>
            </div>
         </Container>
      </Navbar>
   );
};
export default NavbarResponsive;
