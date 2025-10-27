import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
//import Home from './pages/Home'
//import About from './pages/About'

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
    },
    // { path: '/about', element: <About /> }
  ],
  {
    basename: '/react'
  }
)