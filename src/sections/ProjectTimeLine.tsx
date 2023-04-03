import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import styled from "styled-components";
import { BackSpace, Github, Info, WebSite } from "../assets/svg";
import { ShadowItem } from "../components/common/ShadowItem";
import { _Text } from "../components/common/Text";

export const ProjectTimeLine = () => {
  const [modal, setModal] = useState<number>(0);
  return (
    <_Wrapper>
      <_Text size="30px">Start FrontEnd</_Text>
      <_TimeLine />
      <_Station>
        <_TitleItem>2023-5</_TitleItem>
        <_Preview onClick={() => setModal(1)}>
          <_PreviewBack src="https://cdn.crowdpic.net/list-thumb/thumb_l_CDD94CBD46425E4EDBD18A7A17C199E7.jpg" />
          <_SvgWrapper>
            <Info />
          </_SvgWrapper>
        </_Preview>
        <_TimeLine />
      </_Station>
      {!!modal && (
        <_ProjectWrapper>
          <OutsideClickHandler
            onOutsideClick={() => setModal(0)}
            display="inline-block"
          >
            <_ProjectContent>
              <_Text size="32px">OnPost</_Text>
              <_Subject>my first project</_Subject>
              <_SubTitle># 개요</_SubTitle>
              <_ContentText>앙기모띠</_ContentText>
              <_ProjectImg src="https://cdn.crowdpic.net/list-thumb/thumb_l_CDD94CBD46425E4EDBD18A7A17C199E7.jpg" />
              <_ProjectImg src="https://cdn.crowdpic.net/list-thumb/thumb_l_CDD94CBD46425E4EDBD18A7A17C199E7.jpg" />
              <_ProjectImg src="https://cdn.crowdpic.net/list-thumb/thumb_l_CDD94CBD46425E4EDBD18A7A17C199E7.jpg" />
              <_SubTitle># 문제</_SubTitle>
              <_ContentText>해결</_ContentText>
            </_ProjectContent>

            <_ProjectFooter>
              <BackSpace />
              <_ProjectLinks>
                <WebSite />
                <Github />
              </_ProjectLinks>
            </_ProjectFooter>
          </OutsideClickHandler>
        </_ProjectWrapper>
      )}
    </_Wrapper>
  );
};

const _Wrapper = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const _Station = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  gap: 40px;
  padding: 40px 0;
`;

const _PreviewBack = styled.img`
  width: 100%;
  border-radius: ${({ theme }) => theme.radius.medium};
`;

const _Preview = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 500px;
  width: 100%;
  background-color: ${({ theme }) => theme.color.black};
  border-radius: ${({ theme }) => theme.radius.medium};
  :hover {
    ${_PreviewBack} {
      opacity: 30%;
      transition: 0.25s;
    }
  }
`;

const _SvgWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  > svg {
    visibility: hidden;
    position: relative;
    z-index: 2;
    transition: 0.25;
  }
  :hover {
    > svg {
      visibility: visible;
    }
  }
`;

const _LineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const _TimeLine = styled.div`
  width: 10px;
  height: 300px;
  background-color: ${({ theme }) => theme.color.black};
  border-radius: ${({ theme }) => theme.radius.large};
`;

const _Ball = styled.div`
  width: 15px;
  height: 15px;
  margin: 10px 0 10px;
  background-color: ${({ theme }) => theme.color.black};
  border-radius: ${({ theme }) => theme.radius.large};
`;

const _SimpleInfo = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const _TitleItem = styled(ShadowItem)`
  padding: 5px 40px;
  font-size: 20px;
  font-weight: bold;
`;

const _ProjectWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 600px;
  z-index: 5;
  background-color: white;
  box-shadow: ${({ theme }) => theme.shadow.item};
  border-radius: ${({ theme }) => theme.radius.medium};
  padding-top: 10px;
`;

const _ProjectContent = styled.div`
  height: calc(100vh - 80px);
  overflow-y: auto;
  padding: 20px 30px 0 30px;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.color.black};
  }
`;

const _SubTitle = styled.div`
  color: ${({ theme }) => theme.color.gray};
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const _Subject = styled(_SubTitle)`
  margin-bottom: 40px;
`;

const _ContentText = styled(_Text)`
  color: ${({ theme }) => theme.color.black};
  font-size: 20px;
  margin-bottom: 20px;
`;

const _ProjectImg = styled.img`
  width: 100%;
  margin-bottom: 20px;
  border-radius: ${({ theme }) => theme.radius.medium};
`;

const _ProjectFooter = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  gap: 20px;
  box-sizing: border-box;
  box-shadow: 0 -2px 10px 0 rgba(0, 0, 0, 0.1);
`;

const _ProjectLinks = styled.div`
  display: flex;
  gap: 20px;
`;
