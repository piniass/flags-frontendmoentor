import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Landing from './pages/Landing'
import PaisesDetalles from './pages/PaisesDetalles'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/:pais",
      element: <PaisesDetalles />,
    },
    {
      path: "*",
      element: <div>Página no encontrada</div>,
    }
  ]);
  return (
    <>
         <RouterProvider router={router} />
    </>
  )
}

export default App
