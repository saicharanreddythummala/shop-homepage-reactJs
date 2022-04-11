import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Head from './Head';
import Footer from './Footer';
import Section from './Section';
import { useState } from 'react';


function App() {
  const refer = [
    {
      badge: false,
      star: false,
      img: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      product: 'Fancy Product',
      oldPrice: null,
      price: '$40.00 - $80.00'
    },

    {
      badge: true,
      star: true,
      img: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      product: 'Special Item',
      oldPrice: '$20.00',
      price: '$18.00'
    },
    {
      badge: true,
      star: false,
      img: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      product: 'Sale Item',
      oldPrice: '$50.00',
      price: '$25.00'
    },
    {
      badge: false,
      star: true,
      img: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      product: 'Popular Item',
      oldPrice: '$20.00',
      price: '$40.00'
    },
    {
      badge: true,
      star: false,
      img: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      product: 'Sale Item',
      oldPrice: '$50.00',
      price: '$25.00'
    },
    {
      badge: false,
      star: false,
      img: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      product: 'Fancy Product',
      oldPrice: '$120.00',
      price: '$280.00'
    },
    {
      badge: true,
      star: true,
      img: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      product: 'Special Item',
      oldPrice: '$20.00',
      price: '$18.00'
    },
    {
      badge: false,
      star: true,
      img: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      product:  'Popular Item',
      oldPrice: '$20.00',
      price: '$40.00'
    }
  ]

  const [cart, setCart] = useState(0);

  const cartCount = (count) => {
    count ? setCart(cart + 1) : setCart(cart - 1);
  }

  return (
    <><NavBar cart={cart} />
      <Head />
      <Section refer={refer} cartCount={cartCount} />
      <Footer /></>
  );
}

export default App;
