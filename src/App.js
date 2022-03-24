import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { render } from '@testing-library/react';

function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

//Making Counter 
// Using of state variable and useState function

// function Counter(){
//   const [count, setCount] = useState(0);

//   const increaseCount = ()=>setCount(count+1);
//   const decreaseCount= ()=> setCount(count-1);
//   if(count<0){
//     return ('Negetive values are not available')
//   }
//   return(
//     <div>
//       <h1>Count:{count}</h1>
//       <button onClick={increaseCount}>Increase</button>
//       <button onClick={decreaseCount}>Deccrease</button>
//     </div>
//   )
// }

//Loading data from external sources ,dynamic data , API call,useEffect 

// 

function ExternalUsers(){
  const [users,setUsers]= useState([]);
  useEffect( ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data=> setUsers(data))
  },[])
  return(
    <div>
      <h2>External Users</h2>
      <p>{users.length}</p>
      {
        users.map(user=> <User name={user.name}></User>)
      }
    </div>
  )
}
function User(props){
  return(
    <div>
      <h3>Name: {props.name}</h3>
    </div>
  )
}
export default App;
