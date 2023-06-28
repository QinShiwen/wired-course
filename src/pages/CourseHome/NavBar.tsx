import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  useRouterContext,
} from "../../context/useRouerContext";
import "animate.css";
import Logo from "../../assets/logo.png";
import navBG from "../../assets/nav-bg.png";


export function NavBar() {
  const { router,updateActive } = useRouterContext();

  return (
      <Container>
        <div className="logo"><img src = {Logo} alt="logo" height={28}/></div>
        {router.map((route, index) => (
          <NavLink to={route.path} key={index} onClick = {()=>updateActive(index)}>
            <div className={route.active ? "nav-active" : "nav-box"}>
              <img src={route.active ? route.icon1 : route.icon2} alt="router" />
              {route.name}
            </div>
          </NavLink>
        ))}
      </Container>
  );
}

const Container = styled.div`
  z-index: 99;
  height: 100vh;
  box-shadow: 5px 4px 25px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${navBG});
  background-size: cover;

  .logo{
    margin-top: 1rem;
    margin-left: 2rem;
    margin-bottom: 3rem;
  }

  a {
    text-decoration: none;
    color: #ffffff;
  }

  .nav-box {
    display: flex;
    color: #a098ae;
    flex-direction: row;
    align-items: center;
    margin: 10px;
    width: 150px;
    height: 48px;
    img {
      padding: 10px;
      width: 40px;
      height: 40px;
      margin-right: 10px;
    }
  }

  .nav-active {
    display: flex;
    color: #6396f7;
    flex-direction: row;
    align-items: center;
    margin: 10px;
    width: 150px;
    height: 48px;
    img {
      padding: 10px;
      background: #6396f7;
      width: 40px;
      height: 40px;
      border-radius: 10px;
      margin-right: 10px;
      box-shadow: 0px 10px 10px rgba(99, 150, 247, 0.5);
    }
  }
`;
