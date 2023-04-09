import styled from "styled-components";
import { _Text } from "./common/Text";

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
  <_FriendsButton isCurrentButton={isCurrentButton}>
    <_Img src={img} />
    <div>
      <_Text size="15px" weight="bold">
        {name}
      </_Text>
      <_Text size="12px" weight="bold">
        {kinda}
      </_Text>
    </div>
  </_FriendsButton>
);

const _FriendsButton = styled.button<{ isCurrentButton: boolean }>`
  cursor: pointer;
  width: 100%;
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
`;

const _Img = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radius.large};
`;
