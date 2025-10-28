import { StrictMode } from 'react'
import './index.css'
import {createRoot} from 'react-dom/client'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import App from './App'
import About from './page/About'

let root = null

export function mount(selector) {
  root = createRoot(document.querySelector(selector))
  root.render(<div id="react-root"><StrictMode>
    <HashRouter  basename='/react'> 
      <Routes >
            <Route path="/" element={<App />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
  </HashRouter> </StrictMode></div>)
  return () => unmount()
}

export function unmount() {
  if (root) {
    root.unmount()
    root = null
  }
}