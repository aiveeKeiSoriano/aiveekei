import { BrowserRouter, Route, Routes } from "react-router";

import Layout from "./layout";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<Home />} path="/" />
          <Route element={<Projects />} path="/projects" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
