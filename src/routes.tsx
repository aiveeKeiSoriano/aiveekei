import { BrowserRouter, Route, Routes } from "react-router";

import Layout from "./layout";
import Home from "./pages/Home";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<Home />} path="/" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
