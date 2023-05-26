import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "../components/SharedLayout/SharedLayout";
import { lazy } from "react";
const Shop = lazy(() => import("../Pages/ShopPage/ShopPage"));
const Cart = lazy(() => import("../Pages/CartPage/CartPage"));
const History = lazy(() => import("../Pages/HistoryPage/HistoryPage"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/history" element={<History />} />
        <Route path="*" element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
