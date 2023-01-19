import './App.css';
import Day from './components/calendar/day';
import Year from './components/calendar/year';
import MenuBurger from './utils/menu';
import DailyForms from './components/form/form';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import React from 'react';
import LoginPage from './components/auth/login';
import RegisterPage from './components/auth/register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Year></Year>,
  },
  {path:"/dailyforms/:dayID",
  element:<DailyForms></DailyForms>
}
,
{
  path:"/login",
  element:<LoginPage></LoginPage>
}

,
{
  path:"/register",
  element:<RegisterPage></RegisterPage>
}
]);
function App() {
  return (
    <>
    <MenuBurger pageWrapId={'page-wrap'} outerContainerId={'outer-container'}></MenuBurger>

    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
    </>
  );
}

export default App;
