import styled, { css } from "styled-components";
import { _Text } from "./Text";

interface PropsType {
  scroll: number;
}

export const Footer = ({ scroll }: PropsType) => {
  return (
    <_Wrapper scroll={scroll}>
      <_Text size="14px" weight="bold">
        Made By 김태완
      </_Text>
    </_Wrapper>
  );
};

const _Wrapper = styled.div<PropsType>`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 10px;
  bottom: 10px;
  right: 10px;
  padding: 10px;
  border-radius: ${({ theme }) => theme.radius.medium};
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.shadow.item};
  ${({ theme, scroll }) => {
    const color = theme.color;
    const reverseColor = (whatColor: boolean) =>
      color[whatColor ? "white" : "black"];
    return css`
      background-color: ${reverseColor(!!scroll)};
      transition: 0.5s;
      ${_Text} {
        transition: 0.5s;
        color: ${reverseColor(!scroll)}
    `;
  }}
`;
