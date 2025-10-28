import { createHashRouter  } from 'react-router-dom'
import App from './App'
import './index.css'
//import Home from './pages/Home'
//import About from './pages/About'

export const router = createHashRouter (
  [
    {
      path: '/',
      element: <App />,
    },
    {
      path: '/react/',
      redirect: '/'
    },
    // { path: '/about', element: <About /> }
  ],
  {
    basename: '/react'
  }
)