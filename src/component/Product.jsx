import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card, Button, Row, Col, Container, Spinner } from "react-bootstrap";
import { shoppingCartContext } from "../contexts/shoppingCartContext";

function Product() {
   const [count, setCount] = useState(0);
   const [isPending, setIsPending] = useState(false);
   const { productId } = useParams();
   const [product, setproduct] = useState({});
   const { title, price, description, category, image } = product;

   // eslint-disable-next-line no-unused-vars
   const { state, dispatch } = useContext(shoppingCartContext);

   useEffect(() => {
      let localProduct;
      setIsPending(true);
      if (localStorage.getItem("products") !== null) {
         let localProducts = JSON.parse(localStorage.getItem("products"));
         localProduct = localProducts.find(
            // eslint-disable-next-line eqeqeq
            (product) => product.id == productId
         );
         setproduct(localProduct);
         setIsPending(false);
         return;
      }
      axios
         .get(`https://fakestoreapi.com/products/${productId}`)
         .then((res) => {
            setproduct(res.data);
            setIsPending(false);
         })
         .catch((err) => console.log(err));
   }, [productId]);

   const decrease = () => {
      if (count === 0) return;
      setCount(count - 1);
   };
   const addProduct = () => {
      if (count === 0) return;
      dispatch({
         type: "ADD_PRODUCT",
         payload: { ...product, quantite: count },
      });
   };

   return (
      <Container>
         {isPending ? (
            <div className="d-flex justify-content-center">
               <Spinner
                  animation="border"
                  variant="primary"
                  className="my-5"
                  size="xxl"
               />
            </div>
         ) : (
            <Row className="my-5 align-items-center">
               <Col className="border-1" lg={6} xs={12}>
                  <Card.Img
                     variant="top"
                     src={image}
                     alt="product image"
                     loading="lazy"
                  />
               </Col>
               <Col>
                  <Card.Title className="fw-bold text-center my-5 display-5">
                     {title}
                  </Card.Title>
                  <Card.Text className="text-muted my-2">
                     {description}
                  </Card.Text>
                  <p className="fs-bold ">Category : {category}</p>
                  <p className="display-5">{price}$</p>
                  <Row>
                     <Col>
                        <div>
                           <Button variant="danger" onClick={decrease}>
                              -
                           </Button>
                           <span> {count} </span>
                           <Button
                              variant="info"
                              onClick={() => setCount(count + 1)}
                           >
                              +
                           </Button>
                        </div>
                     </Col>
                     <Col>
                        <Button
                           variant="primary"
                           className="px-5"
                           onClick={() => addProduct()}
                        >
                           Add
                        </Button>
                     </Col>
                  </Row>
               </Col>
            </Row>
         )}
      </Container>
   );
}

export default Product;
