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
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {index: true, element: <Landing/>},
      {path: '/signup', element: <Signup/>}, //todo: signup/login need to be styled
      {path: '/login', element: <Login/>},
      {path: '/appointments', element: <Services/>}, //todo: make appointments page
      {path: '/user-dashboard', element: <UserDashboard/>}
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
