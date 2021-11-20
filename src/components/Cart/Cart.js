import Card from 'react-bootstrap/Card';

import './Cart.css';

const Cart = ({ items }) => {
  const itemsData = items.map((el) => (
    <p key={el.id} style={{ backgroundColor: '#164FAC', padding: '5px' }}>
      <span style={{ marginRight: '10px' }} className="accentColor fw-bold">
        {' '}
        {el.price}
      </span>
      {el.title.substring(0, 10)}..
    </p>
  ));

  return (
    <Card
      className="mb-4"
      style={{ backgroundColor: '#155BCC', color: '#fff' }}
    >
      <Card.Body>
        <Card.Title>
          <i className="fa-solid fa-address-book"></i> Contact
        </Card.Title>
        <Card.Text className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adip lorem, sed diam nonummy
          nibh
        </Card.Text>

        <Card.Title>
          <i className="fa-solid fa-cart-arrow-down"></i> Cart{' '}
          {items.length > 0 && `( ${items.length} )`}
        </Card.Title>
        <div
          className={items.length > 0 ? '' : 'text-center'}
          style={{ border: '2px dashed #fff', padding: '40px' }}
        >
          {items.length > 0 ? itemsData : 'Cart is empty'}
        </div>
      </Card.Body>
    </Card>
  );
};
export default Cart;
