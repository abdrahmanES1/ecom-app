import { useState, useEffect, useContext } from "react";
import { Button, Row, Col } from "react-bootstrap";
import { shoppingCartContext } from "../contexts/shoppingCartContext";
function ShoppingButtons(props) {
   const [count, setCount] = useState(0);
   // eslint-disable-next-line no-unused-vars
   const { state, dispatch } = useContext(shoppingCartContext);
   useEffect(() => {
      setCount(props.quantite);
   }, [props.quantite]);

   const decrease = () => {
      if (count === 0) return;
      dispatch({
         type: "MODIFY_QUANTITE_PRODUCT",
         payload: { quantite: count - 1, id: props.id },
      });
      setCount(count - 1);
   };
   const increase = () => {
      dispatch({
         type: "MODIFY_QUANTITE_PRODUCT",
         payload: { quantite: count + 1, id: props.id },
      });
      setCount(count + 1);
   };
   const deleteProduct = () => {
      dispatch({
         type: "DELETE_PRODUCT",
         payload: { id: props.id },
      });
   };
   return (
      <div className="text-center pt-2 border-1 border-top">
         <Row>
            <Col>
               <div>
                  <Button variant="danger" onClick={() => decrease()}>
                     -
                  </Button>
                  <span> {count} </span>
                  <Button variant="info" onClick={() => increase()}>
                     +
                  </Button>
               </div>
            </Col>
            <Col>
               <Button
                  variant="warning"
                  className="px-3"
                  onClick={() => deleteProduct()}
               >
                  Delete
               </Button>
            </Col>
         </Row>
      </div>
   );
}

export default ShoppingButtons;
