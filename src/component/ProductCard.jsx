import { Card } from "react-bootstrap";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { shoppingCartContext } from "../contexts/shoppingCartContext";

const ProductCart = (props) => {
   // eslint-disable-next-line no-unused-vars
   const { state, dispatch } = useContext(shoppingCartContext);
   const { id, title, price, image } = props;

   return (
      <>
         <Card
            style={{ width: "100%", height: "450px" }}
            className="my-3 justify-content-center border-1 overflow-hidden"
         >
            <Card.Img
               variant="top"
               src={image}
               height="65%"
               alt="product image"
               loading="lazy"
            />
            <Card.Body className="text-center">
               <Card.Title>{title.split(" ", 3).join(" ")}</Card.Title>
               <p className="m-0">{price}$</p>
               <Link to={`/${id}`} className="my-1 d-block">
                  Show More
               </Link>
            </Card.Body>
         </Card>
      </>
   );
};

export default ProductCart;
