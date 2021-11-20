import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Product = ({ products, handleItems, cartItems, cart }) => {
  const { productID } = useParams();
  const [added, setAdded] = useState(false);

  //I didn't make another call for single product because it's the same data which I already have
  const getProductById = products.filter((el) => {
    return el.id.toString() === productID;
  });

  useEffect(() => {
    const checkLength = cartItems.filter(
      (el) => el.id.toString() === productID
    ).length;

    if (checkLength) {
      setAdded(true);
    }
  }, [productID, cartItems]);

  return (
    <Row className="pb-5 mt-5">
      <Col md={5} lg={3}>
        {cart}
      </Col>
      <Col md={7} lg={9}>
        <Card>
          <Card.Img
            variant="top"
            src={getProductById[0].image}
            style={{ height: '500px', width: '100%' }}
          />
          <div className="text-center  mt-5">
            <h2 className="fst-italic">{getProductById[0].price} $</h2>
          </div>

          <Card.Body
            className=" text-white"
            style={{ backgroundColor: '#155BCC' }}
          >
            <Row className="mt-5 align-items-center pt-2 pb-4">
              <Col md={12} lg={7}>
                <Card.Title className="mb-3">
                  {getProductById[0].title}
                </Card.Title>
                <Card.Text>{getProductById[0].description}</Card.Text>
              </Col>

              <Col md={12} lg={4} className="offset-md-1 offset-lg-1">
                <div className="d-grid">
                  <Button
                    style={{ backgroundColor: '#2FDA7F' }}
                    className="btn btn-lg"
                    onClick={() => handleItems(getProductById[0])}
                    disabled={added}
                  >
                    {added ? 'Added' : 'Add to Cart'}
                  </Button>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Product;
