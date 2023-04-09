import styled from "styled-components";
import { _Text } from "./common/Text";
import { about } from "../Text/about";

interface UserButtonType {
  name: string;
  kinda: string;
  img: string;
}

export const UserButtonList = ({ name, kinda, img }: UserButtonType) => (
  <_FriendsButton>
    <_Img width={50} height={50} src={img} />
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

const _FriendsButton = styled.button`
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 7px 16px;
  gap: 10px;
  border: 0;
  outline: 0;
  background-color: ${({ theme }) => theme.color.white};
  :hover {
    background-color: ${({ theme }) => theme.color.gray50};
  }
  ${_Text} {
    text-align: start;
  }
`;

const _Img = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radius.large};
`;
