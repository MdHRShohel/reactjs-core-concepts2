//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {  

  return (
    <div className="App">
      {
       <Counter></Counter>
      }
    </div>
  );
}

function Counter(){
  const [Count,setCount] = useState(0);
  const incraseCount = () => {
    const newCount = Count + 1;
    setCount(newCount);
  }

  return(
    <div>
      <h1>Count: {Count} </h1>
      <button onClick={incraseCount}>Increase</button>
    </div>
  )
}

export default App;


/*
function App() {
  const products = [
    {name: 'Photoshop', price: '$90.99'},
    {name: 'Illustrator', price: '$60.99'},
    {name: 'PDF Reader', price: '$6.99'},
    {name: 'Premiere El', price: '$249.99'},
    {name: 'After Effects', price: '$249.99'},
    {name: 'Lightroom', price: '$9.99'},
    {name: 'InDesign', price: '$249.99'}
    ];

  return (
    <div className="App">
      {
        products.map(product => <Product name = {product.name} price ={product.price}></Product>)
      }
    </div>
  );
}

function Product(props){
  return(
    <div className='product'>
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price} </p>
    </div>
  )
}

*/


