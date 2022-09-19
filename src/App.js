//import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function App() {  

  return (
    <div className="App">
      {
      //  <Counter></Counter>
      <ExternalUsers></ExternalUsers>
      }
    </div>
  );
}

function ExternalUsers(){
  const [users,setUsers] = useState([]);
  useEffect( ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  } , [])
  return (
    <div>
      <h3>External Users</h3>
      <p>This is external users</p>
      <p>{users.length}</p>
      {
        users.map(user => <User name={user.name} email ={user.email}></User>)
      }
    </div>
  );
}

function User(props){
  return (
    <div style={{border: '2px solid red', margin:'20px'}}>
      <h3>Name: {props.name}</h3>
      <h5>Email: {props.email}</h5>
    </div>
  );
}

// function Counter(){
//   const [Count,setCount] = useState(0);
//   const incraseCount = () => setCount(Count + 1);
//   const DecraseCount = () => setCount(Count - 1);

//   return(
//     <div>
//       <h1>Count: {Count} </h1>
//       <button onClick={incraseCount}>Increase</button>
//       <button onClick={DecraseCount}>Decrease</button>
//     </div>
//   )
// }

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


