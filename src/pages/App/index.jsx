import { useState } from 'react'
import { Login } from '../Login/login'
import { useRoutes, BrowserRouter } from 'react-router-dom';
import { ForgotPassword } from "../ForgotPassword";
import { VerifyCode } from '../VerifyCode';
import { HomePage } from '../HomePage';
import { Landing } from '../Landing';

function App() {

  const AppRoutes = () => {
    let routes  = useRoutes ([
      {path: "/", element: <Landing />},
      {path: "/home", element: <HomePage/>},
      {path: "/forgot-password", element: <ForgotPassword/>},
      {path: "/verify-code", element: <VerifyCode/>},
      {path: "/login", element: <Login/>},
    ]);
    return routes;
  };


  return (
    <>
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
    </>
  )
}

export default App
