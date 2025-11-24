import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import About from "./page/About";
import List from "@/examples/state/ListExample";

let root = null;

export function mount(selector) {
  root = createRoot(document.querySelector(selector));
  root.render(
    <div id="react-root">
      <HashRouter basename="/react" router>
        <Routes>
          <Route
            path="/"
            element={<App />}
            errorElement={<div>Something went wrong in React Router</div>}
          />
          <Route path="/about" element={<About />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </HashRouter>
    </div>
  );

  return () => unmount();
}

export function unmount() {
  if (root) {
    root.unmount();
    root = null;
  }
}
