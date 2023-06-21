import styled from "styled-components";
import { useCourseContext } from "../../../context/useCourseContext";
import H1 from "../../../assets/toolbar/H1.png";
import H2 from "../../../assets/toolbar/H2.png";
import H3 from "../../../assets/toolbar/H3.png";
import Bold from "../../../assets/toolbar/B.png";
import Italic from "../../../assets/toolbar/I.png";
import Black from "../../../assets/toolbar/A-black.png";
import Red from "../../../assets/toolbar/A-red.png";
import Blue from "../../../assets/toolbar/A-blue.png";
import Yellow from "../../../assets/toolbar/A-yellow.png";
import Line from "../../../assets/toolbar/Line.png";
import { Space } from "antd";
export function ToolBar() {
  const { handleStyleCommand } = useCourseContext();

  const commands = [
    { name: "h1", img: H1 },
    { name: "h2", img: H2 },
    { name: "p", img: H3 },
    { name: "bold", img: Bold },
    { name: "italic", img: Italic },
    { name: "forecolor|#000000", img: Black },
    { name: "forecolor|#DC143C", img: Red },
    { name: "forecolor|#1E90FF", img: Blue },
    { name: "forecolor|#FFD700", img: Yellow },
  ];

  return (
    <Container>
      <Space>
        {commands.map((command, index) => {
          return (
            <>
              <span key = {index}>
                <img
                  src={command.img}
                  alt={command.name}
                  onClick={() => handleStyleCommand(command.name)}
                />
              </span>
              {index === 2 || index === 4 ? (
                <img src={Line} alt="line" />
              ) : null}
            </>
          );
        })}
      </Space>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;

  img {
    height: 0.8rem;
  }

  span {
    padding: 5px;
  }

  span:hover {
    background: #efefef;
    border-radius: 6px;
  }
`;
