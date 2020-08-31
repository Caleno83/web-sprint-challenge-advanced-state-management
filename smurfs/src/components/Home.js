import React from "react";
import { Link } from "react-router-dom";
import background from "../Img/smurfs-village.jpg";
import styled from "styled-components";

const HomeContainer = styled.div`
  background-image: url(${background});
  width: 100%;
  height: 600px;
  margin-top: -33px;
  background-repeat: no-repeat;
  background-size: cover;
  h1 {
    font-size: 3rem;
    color: #88ccff;
    text-align: center;
    text-shadow: 6px 2px 2px black;
    width: 50%;
    padding: 310px 0 0 360px;
  }
  button {
    margin: 10px 0 0 80px;
    padding: 7px;
    border: 2px solid black;
    border-radius: 5px;
    &:hover {
      background-color: #88ccff;
    }
    a {
      color: black;
      text-decoration: none;
      font-size: 1.3rem;
      &:hover {
        color: blue;
      }
    }
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <h1>Lets Increase Our Village With Smurf New Members</h1>
      <button>
        <Link to="/smurfs">Add Smurf Members</Link>
      </button>
    </HomeContainer>
  );
};

export default Home;
