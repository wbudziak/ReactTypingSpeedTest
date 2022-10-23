import InputText from "../components/input";
import Timer from "../components/timer";
import TextWrapper from "../components/textWrapper";
import useLogic from "../hooks/use-logic";

const HomePage = () => {
  const text =
    "Litwo Ojczyzno moja ty jesteś jak zdrowie Litwo Ojczyzno moja ty jesteś jak zdrowie Litwo Ojczyzno moja ty jesteś jak zdrowie Litwo Ojczyzno moja ty jesteś jak zdrowie Litwo Ojczyzno moja ty jesteś jak zdrowie Litwo Ojczyzno moja ty jesteś jak zdrowie";

  const {
    time,
    textArray,
    resetInput,
    correctTypes,
    isEnd,
    startTimer,
    textArrayMap,
    accuracy,
    wordsPerMinute,
    resetHandler,
    keyHandler,
    spaceBarHandler,
    timerHandler,
  } = useLogic(text);

  return (
    <div>
      {!isEnd && (
        <div>
          <TextWrapper>{textArrayMap}</TextWrapper>
          <InputText
            reset={resetInput}
            start={timerHandler}
            spacebarIsClicked={spaceBarHandler}
            currentKey={keyHandler}
          />
          <Timer reset={resetInput} start={startTimer} timeLeft={time} />
        </div>
      )}

      <button onClick={resetHandler}>Reset</button>
      <p>Accuracy: {accuracy}</p>
      <p>Words per minute: {wordsPerMinute}</p>
    </div>
  );
};
export default HomePage;
