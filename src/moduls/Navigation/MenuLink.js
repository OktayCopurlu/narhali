import React,{useState} from "react";
import * as Navbar from "../../UI/Navbar"
import { NavLink } from "react-router-dom";
import "./Navigation.css"

export default function MenuLink() {
    const [openNavbar,setOpenNavbar]=useState(false)

    //this is for @media navbar
    const click = openNavbar;
    const handleClick = () => setOpenNavbar(!openNavbar);
  
  return (
<Navbar.Navbar>
      <Navbar.NavContainer>
        <NavLink exact to="/" className="nav-logo">
          NAR HALI
        </NavLink>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
        <Navbar.NavItem>
          <NavLink
            exact
            to="/hali-list"
            activeclassname="active"
            className="nav-links" onClick={handleClick}
          >
            HALILAR
          </NavLink>
        </Navbar.NavItem>

        <Navbar.NavItem>
          <NavLink
            exact
            to="/perde-list"
            activeclassname="active"
            className="nav-links"  onClick={handleClick}
          >
            PERDELER
          </NavLink>
        </Navbar.NavItem>

        <Navbar.NavItem>
          <NavLink
            exact
            to="/yatak-list"
            activeclassname="active"
            className="nav-links"  onClick={handleClick}
          >
            YATAKLAR
          </NavLink>
        </Navbar.NavItem>

        <Navbar.NavItem>
          <NavLink
            exact
            to="/kaymaz-list"
            activeclassname="active"
            className="nav-links"  onClick={handleClick}
          >
            KAYMAZ TABAN HALILAR
          </NavLink>
        </Navbar.NavItem>
        <Navbar.NavItem>
          <NavLink
            to="/create-form"
            activeclassname="active"
            className="nav-links"  onClick={handleClick}
          >
            ÜRÜN OLUSTUR
          </NavLink>
        </Navbar.NavItem>
      </ul>
      <Navbar.NavIcon onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}> </i>
      </Navbar.NavIcon>
      </Navbar.NavContainer>
    </Navbar.Navbar>

  
  );
}