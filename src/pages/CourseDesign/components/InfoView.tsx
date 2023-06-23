import styled from "styled-components";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";


const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item
      </a>
    ),
  },
];

export function InfoView() {
  return (
    <Container>
      <span>露露</span>
      <Dropdown menu={{ items }}>
        <div className="avatar"></div>
      </Dropdown>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 4rem;
  width: 100%;
  background: #98B3CB;

  h1 {
    margin-left: 4rem;
    margin-top: 0;
    margin-bottom: 0;
  }

  .avatar {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background: #ffffff;
    
    margin-right: 2rem;
    cursor: pointer;
  }

  span{
    margin-left: auto;
    margin-right: 1rem;
    font-size: 1.5rem;
  }
`;
