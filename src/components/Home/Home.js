import React from 'react';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = ({ products, cart }) => {
  return (
    <Row className="mt-5">
      <Col sm={0} md={4} lg={3} className="mb-4">
        {cart}
      </Col>
      <Col sm={11} md={8} lg={9}>
        <Row>
          {products.map((el) => {
            return (
              <Col sm={6} md={6} lg={4} xl={3} className="mb-5" key={el.id}>
                <Card className="p-3" style={{ minHeight: '600px' }}>
                  <Link to={`/product/${el.id}`}>
                    <Card.Img
                      variant="top"
                      style={{ height: '200px', width: '100%' }}
                      src={el.image}
                    />
                  </Link>
                  <hr />
                  <Card.Body>
                    <Card.Title>{el.title}</Card.Title>
                    <Card.Text>
                      {el.description.substring(0, 100)} ...
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Col>
    </Row>
  );
};

export default Home;
