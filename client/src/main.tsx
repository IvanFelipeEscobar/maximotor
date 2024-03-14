import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing.tsx";
import Signup from "./components/Signup.tsx";
import Login from "./components/Login.tsx";
import UserDashboard from "./pages/User-Dashboard.tsx";
import Appointment from "./pages/Appointment.tsx";
import SingleVehicleCard from "./components/SingleVehicleCard.tsx";
import NotFound from "./pages/404.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Landing /> },
      { path: "/signup", element: <Signup /> },
      { path: "/login", element: <Login /> },
      { path: "/appointments", element: <Appointment /> },
      { path: "/user-dashboard", element: <UserDashboard /> },
      {path: "/vehicles/:vehicleId", element: <SingleVehicleCard/>}
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
        <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
