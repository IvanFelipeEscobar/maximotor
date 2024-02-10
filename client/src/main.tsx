import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing.tsx";
import Signup from "./components/Signup.tsx";
import Login from "./components/Login.tsx";
import Services from "./components/Services.tsx";
import UserDashboard from "./pages/User-Dashboard.tsx";
// import NewUser from "./components/NewUser.tsx";
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {index: true, element: <Landing/>},
      {path: '/signup', element: <Signup/>}, 
      {path: '/login', element: <Login/>},
      {path: '/appointments', element: <Services/>}, //todo: make appointments page
      {path: '/user-dashboard', element: <UserDashboard/>},//to do: user dash
    ]
  }
])
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router}/>
    </ChakraProvider>
  </React.StrictMode>
);
