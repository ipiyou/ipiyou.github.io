import styled from "styled-components";
import { _Text } from "./common/Text";
import { ReactNode } from "react";
import { ImageType } from "../assets";
import { Img } from "./common/VifImage";

interface ChatType {
  img?: ImageType;
  texts: (string | ReactNode)[];
}

export const ChatText = ({ img, texts }: ChatType) =>
  img ? (
    <_ChatUser>
      <_Img {...img} alt="채팅방 프로필 이미지"/>
      <_ChatTextBoxList>
        {texts.map((text) => (
          <_ChatUserTextBox size="14px">{text}</_ChatUserTextBox>
        ))}
      </_ChatTextBoxList>
    </_ChatUser>
  ) : (
    <_ChatMe>
      {texts.map((text) => (
        <_ChatMeTextBox size="14px">{text}</_ChatMeTextBox>
      ))}
    </_ChatMe>
  );

const _ChatTextBoxList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const _ChatUser = styled.div`
  display: flex;
  align-items: end;
  gap: 10px;
`;

const _ChatUserTextBox = styled(_Text)`
  max-width: 500px;
  width: fit-content;
  border-radius: ${({ theme }) => theme.radius.medium};
  background-color: ${({ theme }) => theme.color.gray10};
  padding: 8px 16px;
`;

const _ChatMe = styled.div`
  display: flex;
  justify-content: end;
`;

const _ChatMeTextBox = styled(_ChatUserTextBox)`
  background-color: ${({ theme }) => theme.color.blue};
  color: ${({ theme }) => theme.color.white};
`;

const _Img = styled(Img)`
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radius.large};
`;
