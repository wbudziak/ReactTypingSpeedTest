import { useEffect, useState } from "react";
import * as S from "./style";

const Timer = (props) => {
  const { timeLeft, start, reset } = props;

  const [time, setTime] = useState(60);
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  const timerHandler = () => {
    if (time === 0) return;
    setTimeout(() => {
      setTime((time -= 1));
    }, 1000);
  };

  if (start) timerHandler();

  return (
    <>
      <S.Timer>{`${minutes < 10 ? "0" + minutes : minutes}:${
        seconds <= 9 ? "0" + seconds : seconds
      }`}</S.Timer>
    </>
  );
};

export default Timer;
