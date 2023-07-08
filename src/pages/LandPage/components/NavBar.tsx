import styled from "styled-components";
import { Space } from "antd";
//nav bar
import Logo from "../../../assets/logo.png";
const LandRoutes = [
  {
    name: "关于PBL",
  },
  {
    name: "产品",
  },
  {
    name: "案例分享",
  },
  {
    name: "关于我们",
  },
];

export function NavBar(){
    return (
        <Container>
        <Space size = {30}>
          <img src={Logo} alt="logo" height={30} />
          {LandRoutes.map((LandRoute) => {
            return <span className="route-name">{LandRoute.name}</span>;
          })}
        </Space>
        <span>登陆/注册</span>
      </Container>
    )
}

const Container = styled.div`
  height: 5rem;
  padding: 2rem 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  img {
    margin-right: 2rem;
  }

  span {
    cursor: pointer;
  }
`;