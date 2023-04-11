import styled from "styled-components";
import { _Text } from "./common/Text";
import { finalMedia } from "../media/media";

interface UserButtonType {
  name: string;
  kinda: string;
  img: string;
  isCurrentButton: boolean;
}

export const UserButtonList = ({
  name,
  kinda,
  img,
  isCurrentButton,
}: UserButtonType) => (
  <_Wrapper isCurrentButton={isCurrentButton}>
    <_Img src={img} alt="회고 프로필 사진" />
    <_TextWrapper>
      <_Text size="15px" weight="bold">
        {name}
      </_Text>
      <_Text size="12px" weight="bold">
        {kinda}
      </_Text>
    </_TextWrapper>
  </_Wrapper>
);

const _Wrapper = styled.button<{ isCurrentButton: boolean }>`
  cursor: pointer;
  max-width: 300px;
  width: 100%;
  transition: 0.5s;
  display: flex;
  align-items: center;
  padding: 7px 16px;
  gap: 10px;
  background-color: ${({ theme, isCurrentButton }) =>
    theme.color[isCurrentButton ? "gray50" : "white"]};
  ${_Text} {
    text-align: start;
  }
  :hover {
    background-color: ${({ theme }) => theme.color.gray50};
  }
  ${finalMedia(`
    padding: 7px 8px;
  `)}
`;

const _TextWrapper = styled.div`
  ${finalMedia(`
    display: none;
  `)}
`;

const _Img = styled.img`
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radius.large};
`;
