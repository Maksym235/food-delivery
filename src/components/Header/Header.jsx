import { HeaderSt, Nav, NavLinkSt } from "./Header.styled";
export function Header() {
  return (
    <HeaderSt>
      <Nav>
        <NavLinkSt to="/">Shop</NavLinkSt>
        <NavLinkSt to="/cart">Shoping cart</NavLinkSt>
        <NavLinkSt to="/history">History</NavLinkSt>
      </Nav>
    </HeaderSt>
  );
}
