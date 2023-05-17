import styled from "styled-components";

interface TagBoxProps {
  key: any;
  tag: string;
  caption: string;
  information: any;
  changeInfo: (value:any,index:number) => void;
}

export function TagBox({ key, tag, caption, information, changeInfo }: TagBoxProps) {
  const Option = (
    <select value={information?.value} onChange={(e)=>changeInfo(e.target.value,key)}>
      {information.choice?.map((item: string, index: number) => (
        <option key={index} value={item} >
          {item}
        </option>
      ))}
    </select>
  );

  const Input = <input type="text" value={information} onChange={(e)=>changeInfo(e.target.value,key)} />;

  const tagsType: { [key: string]: JSX.Element } = {
    option: Option,
    input: Input,
  };

  return (
    <Container>
      <div>{caption}</div>
      <div>{tagsType[tag]}</div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  select {
    padding: 2px 10px 2px 10px;
    width: 12rem;
    height: 3rem;
    border:none;
    outline: none;

    background: #ffffff;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
  }

  input {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 2px 10px 2px 10px;

    width: 12rem;
    height: 3rem;

    border:none;
    outline: none;

    background: #ffffff;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
  }
`;
