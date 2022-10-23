import * as S from "./style";

const TextSpan = (props) => {
  return (
    <>
      <S.TextSpan color={props.color}>{props.children}</S.TextSpan>
    </>
  );
};
export default TextSpan;
