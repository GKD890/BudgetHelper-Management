import React from 'react';
import { Outlet, Link } from "react-router-dom";

import './App.css';
import LoginTab from './components/login/login';

export default function App() {
  return (
    <div>

      <h1> Welcom to Budget Helper Mangement System</h1>

      <nav>
        <ul>
          <li>
            <Link to={'/login'}> Login Page
              
            </Link>
            <Outlet />
          </li>
        </ul>
      </nav>

    </div>
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