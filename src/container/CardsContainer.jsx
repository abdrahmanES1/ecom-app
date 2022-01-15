import React from "react";
import { useContext } from "react";
import { productsContext } from "../contexts/productsContext";
import { Container, Col, Row, Spinner } from "react-bootstrap";
import ProductCard from "../component/ProductCard";
const CardsContainer = () => {
   const { products } = useContext(productsContext);

   return (
      <Container>
         <Row className="my-5  justify-content-center">
            {!products.length ? (
               <div className="d-flex justify-content-center">
                  <Spinner
                     animation="border"
                     variant="primary"
                     className="my-5"
                     size="xxl"
                  />
               </div>
            ) : (
               products.map((product) => {
                  return (
                     <Col key={product.id} md={6} lg={4} xl={3}>
                        <ProductCard {...product} />
                     </Col>
                  );
               })
            )}
         </Row>
      </Container>
   );
};

export default CardsContainer;
