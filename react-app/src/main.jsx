import { StrictMode } from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'

let root = null

export function mount(selector) {
  root = ReactDOM.createRoot(document.querySelector(selector))
  root.render(<div id="react-root"><StrictMode><RouterProvider router={router}/></StrictMode></div>)
  return () => unmount()
}

export function unmount() {
  if (root) {
    root.unmount()
    root = null
  }
}