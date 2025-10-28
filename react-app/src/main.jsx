import { StrictMode } from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import { HashRouter  } from 'react-router-dom'
import { router } from './router'

let root = null

export function mount(selector) {
  root = ReactDOM.createRoot(document.querySelector(selector))
  root.render(<div id="react-root"><StrictMode>
    <HashRouter  router={router}> 
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* Add more routes as needed */}
          </Routes>
  <HashRouter/> </StrictMode></div>)
  return () => unmount()
}

export function unmount() {
  if (root) {
    root.unmount()
    root = null
  }
}