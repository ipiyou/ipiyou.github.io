import styled, { css } from "styled-components";
import { ScrollType } from "../../App";
import { _Text } from "./Text";

const nav = ["Home", "Skills", "Projects", "Detail"];
const labelText = ["go to home","go to rotate skill","go to show projects","go to Review projects or company"]

export const Header = ({ setScroll, scroll }: ScrollType) => {
  return (
    <_Wrapper>
      <_Content>
        {nav.map((li, idx) => (
          <_Li >
            <_Link
              size="16px"
              weight="bold"
              aria-label={labelText[idx]}
              isCurrentButton={scroll === idx}
              onClick={() => setScroll(idx)}
            >
              {li}
            </_Link>
          </_Li>

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
  > li {
    list-style: none;
  }
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

const _Li = styled.li `
  width: 100%;
  height: 100%;
`

const _Link = styled(_Text)<{ isCurrentButton: boolean }>`
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, isCurrentButton }) =>
    theme.color[isCurrentButton ? "gray50" : "white"]};
  :hover {
    text-decoration: underline ${({ theme }) => theme.color.blue};
  }
`;
