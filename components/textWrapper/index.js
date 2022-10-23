import * as S from "./style";

const TextWrapper = (props) => {
  return (
    <>
      <S.TextWrapper>{props.children}</S.TextWrapper>
    </>
  );
};
export default TextWrapper;
