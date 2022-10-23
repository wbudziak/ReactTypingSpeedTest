import styled from "styled-components";

export const TextWrapper = styled.div`
  max-width: 500%;
  width: 100%;
  /* word-wrap: break-word; */
`;

export const TextSpan = styled.span`
  margin-right: 6px;
  font-size: 30px;
  color: black;
  display: block;
  color: ${(props) =>
    (props.color === "correct" && "green") ||
    (props.color === "uncorrect" && "red")};

  background-color: ${(props) => props.color === "current" && "#b2d2fa"};
`;
