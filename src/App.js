import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';

import './App.css';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState(null);
  const [error, setError] = useState('');
  const [cartItems, setCartItems] = useState([]);

  const addCartItems = (item) => {
    setCartItems([...cartItems, item]);
  };

  useEffect(() => {
    const responseData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Request failed, check the endpoint!');
        }
        const responseProducts = await response.json();
        const filterProducts = responseProducts.filter((product, i) => i < 8);
        setProducts(filterProducts);
        setLoading(false);
      } catch (e) {
        setError(e);
        setLoading(false);
      }
    };
    responseData();
  }, []);

  if (error) {
    return (
      <div className="text-center mt-5">
        <p>Sorry, something went wrong!</p>
        <p>Details: {error.toString()}</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
        <Spinner animation="border" variant="secondary" />
        <Spinner animation="border" variant="success" />
        <Spinner animation="border" variant="danger" />
        <Spinner animation="border" variant="warning" />
      </div>
    );
  }

  return (
    <div className="bg-pages">
      <Navigation />
      <Container>
        <Switch>
          <Route path="/" exact>
            <Home
              products={products}
              cart={<Cart items={cartItems} handleItems={addCartItems} />}
            />
          </Route>

          <Route path="/product/:productID">
            <Product
              products={products}
              handleItems={addCartItems}
              cart={<Cart items={cartItems} handleItems={addCartItems} />}
              cartItems={cartItems}
            />
          </Route>

          <Route path="/about" exact>
            <About />
          </Route>

          <Route path="/contact" exact>
            <Contact />
          </Route>

          <Route path="/*" exact>
            <h1>NOT FOUND!</h1>
          </Route>
        </Switch>
      </Container>
    </div>
  );
};
export default App;
