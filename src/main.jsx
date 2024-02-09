import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Valuta from './components/Valuta.jsx'

const router = createBrowserRouter([
  {
    path: "*",
    element: <App />
  },
  {
    path: ":id",
    element: <Valuta />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
