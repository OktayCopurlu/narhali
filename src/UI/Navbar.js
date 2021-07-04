import styled from "styled-components";

export const Navbar = styled.nav`
  background-color: #000000;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 20;

  @media screen and (min-width: 958px) and (max-width: 1145px) {
    background-color: #000000;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.74rem;
    position: sticky;
    top: 0;
    z-index: 20;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  max-width: 1500px;
`;

export const NavItem = styled.li`
line-height: 40px;
margin-right: 1rem;

  &:after {
    content: "";
    display: block;
    height: 3px;
    width: 0;
    background: transparent;
    transition: width 0.7s ease, background-color 0.5s ease;
  }

  &:hover:after {
    width: 100%;
    background: #bee9e8;
  }

  & .active {
    color: #bee9e8;
  }
  @media screen and (max-width: 960px) {
    & .active {
      color: #bee9e8;
      border: none;
    }
  }
`;

export const NavIcon = styled.div`
display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #bee9e8;
  }
`;
