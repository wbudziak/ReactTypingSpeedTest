import { useState, useEffect } from "react";
import TextSpan from "../components/text";

const useLogic = (text) => {
  const time = 60;

  const textToArray = text.split(/\s+/);
  const [textArray, setTextArray] = useState(
    textToArray.map((text) => ({
      value: "black",
      text: text,
      length: text.length,
    }))
  );

  const [resetInput, setResetInput] = useState(false);
  const [currentTextId, setCurrentTextId] = useState(0);
  const [correctTypes, setCorrectTypes] = useState(0);
  const [unCorrectTypes, setUnCorrectTypes] = useState(0);
  const [isEnd, setIsEnd] = useState(false);
  const [startTimer, setStartTimer] = useState(false);
  const [currentKey, setCurrentKey] = useState();
  const [wordRange, setWordRange] = useState({ from: 0, to: 25 });
  const [accuracy, setAccuracy] = useState("0%");
  const [wordsPerMinute, setWordPerMinute] = useState(0);

  const resetHandler = () => {
    setCurrentKey();
    setResetInput(false);
    setCurrentTextId(0);
    setCorrectTypes(0);
    setUnCorrectTypes(0);
    setAccuracy("0%");
    setWordPerMinute(0);
    setWordRange({ from: 0, to: 25 });
    setIsEnd(false);
    setStartTimer(false);
    setTextArray(
      textToArray.map((text) => ({
        value: "black",
        text: text,
      }))
    );
  };

  const keyHandler = (value) => {
    setCurrentKey(value);
  };

  const spaceBarHandler = (value) => {
    if (!isEnd) {
      setResetInput(true);
      setTimeout(() => {
        setResetInput(false);
      }, 10);

      if (textArray[currentTextId].text === currentKey) {
        setCorrectTypes((correctTypes += 1));
        textArray[currentTextId].value = "correct";
      } else {
        setUnCorrectTypes((unCorrectTypes += 1));
        textArray[currentTextId].value = "uncorrect";
      }

      setCurrentTextId((currentTextId += 1));
    }
  };

  const timerHandler = () => {
    setStartTimer(true);
  };

  useEffect(() => {
    if (currentTextId === textArray.length) {
      setIsEnd(true);
    } else {
      textArray[currentTextId].value = "current";
    }
  }, [currentTextId, textArray]);

  // range between texts

  useEffect(() => {
    if (currentTextId % 13 === 0 && currentTextId !== 0) {
      setWordRange({ from: (wordRange.from += 13), to: (wordRange.to += 13) });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTextId]);

  // info's

  useEffect(() => {
    if (currentTextId !== 0) {
      setAccuracy(Math.floor((correctTypes / currentTextId) * 100) + "%");
      setWordPerMinute(correctTypes);
    }
  }, [accuracy, currentTextId, textArray, correctTypes, unCorrectTypes, time]);

  const textArrayMap = textArray
    .slice(wordRange.from, wordRange.to)
    .map((text, id) => (
      <TextSpan color={text.value} key={id}>
        {text.text}
      </TextSpan>
    ));

  return {
    time,
    textToArray,
    textArray,
    resetInput,
    currentTextId,
    correctTypes,
    unCorrectTypes,
    isEnd,
    startTimer,
    currentKey,
    accuracy,
    wordsPerMinute,
    wordRange,
    textArrayMap,
    resetHandler,
    keyHandler,
    spaceBarHandler,
    timerHandler,
  };
};

export default useLogic;
