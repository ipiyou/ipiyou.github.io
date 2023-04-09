import styled from "styled-components";
import { _Text } from "../components/common/Text";
import { KimTeaWan } from "../assets/img";
import { useState } from "react";
import { useScroll } from "../hooks/useScroll";
import { ScrollType } from "../App";
import { about } from "../Text/about";
import { Github, Good } from "../assets/svg";
import { Link } from "../components/common/Link";

export const Finish = ({ setScroll }: ScrollType) => {
  const ref = useScroll(setScroll, 4);
  const [innerScroll, setInnerScroll] = useState<boolean>(false);
  const { title, subTitle, detail, img, github, content } = about;
  const scrollEvent = {
    onWheel: () => setInnerScroll(true),
    onMouseLeave: () => setInnerScroll(false),
  };
  return (
    <_Wrapper ref={innerScroll ? undefined : ref}>
      <_Content>
        <_Friends {...scrollEvent}>
          <_FriendsHeader>
            <_Text margin="20px 0 0">채팅</_Text>
            <_FriendsInput placeholder="검색" />
          </_FriendsHeader>
          {Array(6)
            .fill(0)
            .map(() => (
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
            ))}
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
              </_HeaderImgCenter>
            </Link>
          </_ChatHeader>
          <_ChatContent {...scrollEvent}>
            {Array(3)
              .fill(0)
              .map(() => (
                <>
                  <_ChatUser>
                    <_Img width={30} height={30} src={KimTeaWan} />
                    <_ChatTextBoxList>
                      <_ChatUserTextBox size="14px">
                        안녕하세요
                      </_ChatUserTextBox>
                      <_ChatUserTextBox size="14px">
                        안녕하세요
                      </_ChatUserTextBox>
                    </_ChatTextBoxList>
                  </_ChatUser>
                  <_ChatMe>
                    <_ChatMeTextBox size="14px">안녕하세용</_ChatMeTextBox>
                  </_ChatMe>
                </>
              ))}
          </_ChatContent>
          <_Footer>
            <_FooterInput />
            <Good />
          </_Footer>
        </_ChatWrapper>
      </_Content>
    </_Wrapper>
  );
};

const _Wrapper = styled.section`
  height: 100vh;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const _Content = styled.div`
  max-width: 1000px;
  max-height: 500px;
  width: 100%;
  height: 100%;
  display: flex;
  box-shadow: ${({ theme }) => theme.shadow.item};
  border-radius: ${({ theme }) => theme.radius.medium};
`;

const _Friends = styled.div`
  max-width: 300px;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  border-right: 1px solid ${({ theme }) => theme.color.gray100};
`;

const _FriendsHeader = styled.div`
  padding: 0 16px;
`;

const _FriendsInput = styled.input`
  width: 100%;
  height: 26px;
  outline: 0;
  padding: 0 8px;
  margin: 10px 0;
  border-radius: ${({ theme }) => theme.radius.small};
  border: 1px solid ${({ theme }) => theme.color.gray100};
  :focus {
    box-shadow: ${({ theme }) => theme.shadow.item};
  }
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
  max-width: 700px;
  width: 100%;
  height: 100%;
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
  max-height: 80%;
  padding: 20px 20px 100px 20px;
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
