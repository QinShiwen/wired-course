import { Link } from "react-router-dom";
import styled, { keyframes, css } from "styled-components";
import { routesInfo } from "../../CourseHome";
import { useState } from "react";
import "animate.css";

export function NavBar() {
  return (
    <Container>
      {routesInfo.map((route, index) => (
        <div key={index} className="nav-box">
          <Link to={route.path}>{route.name}</Link>
        </div>
      ))}
    </Container>
  );
}

const Container = styled.div`
  z-index: 99;
  padding-top: 5rem;
  height: 100vh;
  box-shadow: 5px 4px 25px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;

  .nav-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: #6396f7;
    margin:10px;
    box-shadow: 0px 20px 50px rgba(46, 46, 46, 0.05);
    width: 150px;
    height: 48px;
    border-radius: 16px;
    color: #FFFFFF;
    font-size: 16px;
    cursor: pointer;
  }
  
  a{
    text-decoration:none;
    color: #FFFFFF;
  }

`;
