interface TagBoxProps {
  tag: string;
  caption: string;
  information: any;
  changeInfo: () => void;
}

const GainSelect = (information:string, changeInfo:()=>void)=>{
    return (
      <>
        <select>
            <option value={information} onChange={changeInfo} />
        </select>
        </>
    );

}

export function TagBox({ tag, caption, information, changeInfo }: TagBoxProps) {
  
    const Option = GainSelect(information, changeInfo);
  const Input = (<input type="text" value={information} onChange={changeInfo} />);

  const tagsType: { [key: string]: JSX.Element } = {
    "option": Option,
    "input": Input,
  };

  return (
    <div>
      <div>{caption}</div>
      <div>{tagsType[tag]}</div>
    </div>
  );
}
