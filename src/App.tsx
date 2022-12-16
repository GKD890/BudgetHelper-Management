import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";

import './App.css';
import LoginTab from './components/login/login';
import { INavbar } from './components/navbar';

export default function App() {
  return (
    <>
      <INavbar />
      <Container className='mb-4 w-100'>
      <div className='header'>
        <h1> Welcom to Budget Helper Mangement System</h1>
      </div>
 
      </Container>
    </>
  );
}

//  export const loader = async() => { 
//     const login = await LoginTab
// }



// const getTodos = async() => {
//   try {
//       const response = await fetch("http://localhost:5000/todos")
//       const jsonData = await response.json();
//       setTodos(jsonData)
//   } catch (err) {
//       console.error(err.message);
//   }
// }

// useEffect(()=> {
//   getTodos();
// }, []);