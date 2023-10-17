import styled, { css } from "styled-components";
import { ScrollType } from "../../App";
import { _Text } from "./Text";

const nav = ["Home", "Skills", "Projects", "Detail"];

interface PropsType {
  scroll: number;
}

export const Header = ({scroll}:PropsType) => {
  const scrollto = (idx:number) => document.documentElement.scrollTo({top: (document.documentElement.scrollHeight / 4) * idx,  behavior: "smooth",})
  return (
    <_Wrapper>
      <_Content>
        {nav.map((li, idx) => (
          <_Link
            as="button"
            size="16px"
            color="gray100"
            weight="bold"
            isCurrentButton={scroll === idx}
            onClick={() => scrollto(idx)}
          >
            {li}
          </_Link>
        ))}
      </_Content>
    </_Wrapper>
  );
};

const _Wrapper = styled.div`
  position: fixed;
  z-index: 3;
  top: 0;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
`;

const _Content = styled.ul`
  width: 60%;
  height: 40px;
  display: flex;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.shadow.item};
  ${({ theme }) => {
    const radius = theme.radius.medium;
    return css`
      border-radius: 0 0 ${radius} ${radius};
      > button {
        :first-child {
          border-radius: 0 0 0 ${radius};
        }
        :last-child {
          border-radius: 0 0 ${radius};
        }
      }
    `;
  }};
`;

const _Link = styled(_Text)<{ isCurrentButton: boolean }>`
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, isCurrentButton }) =>
    theme.color[isCurrentButton ? "gray50" : "white"]};
  :hover {
    text-decoration: underline ${({ theme }) => theme.color.blue};
  }
`;
