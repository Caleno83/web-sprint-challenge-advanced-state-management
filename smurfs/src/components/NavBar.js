import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../Img/smurfsLogo.jpg";

const Nav = styled.div`
  width: 95.6%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 30px;
  background-color: #88ccff;
  h1 {
    color: white;
    margin: 0 0 80px -170px;
    text-shadow: 6px 2px 2px black;
    font-size: 2.8rem;
  }
  img {
    width: 310px;
    height: 108px;
    margin: -30px 0 0 -30px;
  }
  nav {
    margin-top: 7px;
    a {
      text-decoration: none;
      color: white;
      font-size: 1.8rem;
      &:hover {
        color: blue;
      }
    }
  }
`;

const NavBar = () => {
  return (
    <Nav>
      <div>
        <img src={logo} alt="smurfs logo" />
      </div>
      <div>
        <h1>SMURF VILLAGE</h1>
      </div>

      <nav>
        <Link to="/">Home</Link>
      </nav>
    </Nav>
  );
};

export default NavBar;
