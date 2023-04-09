import styled from "styled-components";
import { _Text } from "../components/common/Text";
import { useState } from "react";
import { useScroll } from "../hooks/useScroll";
import { ScrollType } from "../App";
import { about } from "../Text/about";
import { Github, Good } from "../assets/svg";
import { Link } from "../components/common/Link";
import { UserButtonList } from "../components/UserButtonList";
import { ChatText } from "../components/ChatList";

export const Finish = ({ setScroll }: ScrollType) => {
  const ref = useScroll(setScroll, 4);
  const [innerScroll, setInnerScroll] = useState<boolean>(false);
  const [profile, setProfile] = useState<number>(0);
  const [search, setSearch] = useState<string>("");

  const currentChat = about[profile];
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
            <_FriendsInput
              placeholder="검색"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </_FriendsHeader>
          {about.map(
            (data, idx) =>
              data.name.includes(search) && (
                <div onClick={() => setProfile(idx)}>
                  <UserButtonList {...data} isCurrentButton={profile === idx} />
                </div>
              )
          )}
        </_Friends>
        <_ChatWrapper>
          <_ChatHeader>
            <_HeaderImgCenter>
              <_Img width={30} height={30} src={currentChat.img} />
              <_Text size="16px" weight="bold">
                {currentChat.name}
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
            {currentChat.content.map(ChatText)}
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
