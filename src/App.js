//import logo from './logo.svg';
import './App.css';

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
        products.map(product => <Product name = {product.name}></Product>)}
      {/* <Product name="Laptop" price = '47000'></Product>
      <Product name="IPhone" price = "120000"></Product>
      <Product name="Watch" price = "3500"></Product> */}
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

export default App;
