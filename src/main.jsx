// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import {
//   SIGNUP_PATH,
//   SIGNIN_PATH,
//   authFormAction,
// } from './components/AuthForm/auth-form-utils';
// import AuthForm from './components/AuthForm/AuthForm';
// import Guard from './components/AuthGuard/AuthGuard';
import App from "./App.jsx";
import "./index.css";
import Dashboard from "./components/Dashboard.jsx";
import Home from "./components/Home.jsx";
import SideBar from "./components/SideBar.jsx";
import { Provider } from "react-redux";
import store from "./store/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "no",
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  //Provider is used for enabling the access of redux state in whole app

  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </Provider>
);
