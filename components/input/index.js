import * as S from "./style";
import { useEffect, useRef, useState } from "react";

const InputText = (props) => {
  const { currentKey, spacebarIsClicked, reset, start } = props;

  const [char, setChar] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    currentKey(char);
  }, [char, currentKey]);

  const keyHandler = (e) => {
    start();
    if (e.keyCode === 32) {
      spacebarIsClicked(true);
    }
  };

  return (
    <S.InputText
      ref={inputRef}
      value={reset === true ? "" : char}
      onKeyDown={keyHandler}
      onChange={() => setChar(reset === true ? "" : inputRef.current.value)}
      correct={props.correct}
    >
      {props.children}
    </S.InputText>
  );
};
export default InputText;
