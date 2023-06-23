import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { routesInfo } from "./CourseHome";
import "animate.css";

export function NavBar() {
  return (
    <Container>
      {routesInfo.map((route, index) => (
        <NavLink to={route.path} key={index} >
          <div className={route.active?"nav-active" : "nav-box"}>
            <img src={route.icon} alt="router" />
            {route.name}
          </div>
        </NavLink>
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

  a {
    text-decoration: none;
    color: #ffffff;
  }

  .nav-box {
    display: flex;
    color: #A098AE;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 10px;
    box-shadow: 0px 20px 50px rgba(46, 46, 46, 0.05);
    width: 150px;
    height: 48px;
    img {
      padding: 5px;
      width: 40px;
      margin-right: 10px;
    }
  }

  .nav-active{
    display: flex;
    color: #6396f7;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 10px;
    width: 150px;
    height: 48px;
    img{
      padding: 5px;
      background: #6396f7;
      width: 40px;
      border-radius: 10px;
      margin-right: 10px;
      box-shadow: 0px 10px 10px rgba(99, 150, 247, 0.5);
    }
  }

`;
