import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const HeaderSt = styled.header`
  display: flex;
  border-bottom: 1px solid;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 30px;
  padding-left: 20px;
`;

export const NavLinkSt = styled(NavLink)`
  padding-top: 20px;
  padding-bottom: 20px;
  text-decoration: none;
  color: #fff;

  &:hover,
  &:focus {
    color: #aa90f5;
  }

  transition: color 0.2s linear;

  &.active {
    color: #aa90f5;
  }
`;
