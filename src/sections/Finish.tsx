import styled from "styled-components";
import { SectionTitle } from "../components/common/SectionTitle";
import { Card } from "../components/Card";
import { _Text } from "../components/common/Text";
import { KimTeaWan, MyGithub } from "../assets/img";
import { ShadowItem } from "../components/common/ShadowItem";
import { useScroll } from "../hooks/useScroll";
import { ScrollType } from "../App";
import { about } from "../Text/about";
import { Github, Good } from "../assets/svg";
import { Link } from "../components/common/Link";

export const Finish = ({ setScroll }: ScrollType) => {
  const ref = useScroll(setScroll, 4);
  const { title, subTitle, detail, img, github, content } = about;
  return (
    <_Wrapper ref={ref}>
      <_Friends>
        <_FriendsHeader>
          <_Text>채팅</_Text>
          <_FriendsInput placeholder="검색" />
        </_FriendsHeader>
        <_FriendsButton>
          <_Img width={50} height={50} src={KimTeaWan} />
          <div>
            <_Text size="15px" weight="bold">
              김태완
            </_Text>
            <_Text size="12px" weight="bold">
              반갑습니다.
            </_Text>
          </div>
        </_FriendsButton>
      </_Friends>
      <_ChatWrapper>
        <_ChatHeader>
          <_HeaderImgCenter>
            <_Img width={30} height={30} src={KimTeaWan} />
            <_Text size="16px" weight="bold">
              김태완
            </_Text>
          </_HeaderImgCenter>
          <Link to="asgas">
            <_HeaderImgCenter>
              <Github />
              <_Text size="18px">ipiyou</_Text>
            </_HeaderImgCenter>{" "}
          </Link>
        </_ChatHeader>
        <_ChatContent>
          <_ChatUser>
            <_Img width={30} height={30} src={KimTeaWan} />
            <_ChatTextBoxList>
              <_ChatUserTextBox size="14px">안녕하세요</_ChatUserTextBox>
              <_ChatUserTextBox size="14px">안녕하세요</_ChatUserTextBox>
            </_ChatTextBoxList>
          </_ChatUser>
          <_ChatMe>
            <_ChatMeTextBox size="14px">안녕하세용</_ChatMeTextBox>
          </_ChatMe>
        </_ChatContent>
        <_Footer>
          <_FooterInput />
          <Good />
        </_Footer>
      </_ChatWrapper>
    </_Wrapper>
  );
};

const _Wrapper = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const _Friends = styled.div`
  width: 300px;
  height: 500px;
  border: 1px solid black;
`;
const _FriendsHeader = styled.div`
  padding: 0 16px;
`;
const _FriendsInput = styled.input`
  width: 100%;
  height: 26px;
  border-radius: ${({ theme }) => theme.radius.small};
  padding: 0 8px;
`;
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
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radius.large};
`;

const _ChatWrapper = styled.div`
  position: relative;
  width: 700px;
  height: 500px;
  border: 1px solid black;
`;

const _ChatHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: end;
  justify-content: space-between;
  padding: 5px 20px;
  border-bottom: 1px solid black;
`;
const _HeaderImgCenter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const _ChatContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;
`;

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

const _Footer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 5px;
  gap: 10px;
  padding: 0 10px 0 20px;
  display: flex;
  align-items: center;
`;

const _FooterInput = styled.input`
  width: 100%;
  height: 28px;
  border: 0;
  outline: 0;
  padding: 0 16px;
  border-radius: ${({ theme }) => theme.radius.large};
  background-color: ${({ theme }) => theme.color.gray50};
`;
