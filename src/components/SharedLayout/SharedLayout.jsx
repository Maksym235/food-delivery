import { Header } from "../Header/Header";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Conteiner } from "./SharedLayout.styled";

export function SharedLayout() {
  return (
    <Conteiner>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Conteiner>
  );
}
