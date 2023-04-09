import { ReactNode, useRef } from "react";
import styled from "styled-components";
import { Github, PlayVideo, WebSite } from "../assets/svg";
import { ShadowContent, ShadowItem } from "./common/ShadowItem";
import { _Text } from "./common/Text";
import { Link } from "./common/Link";

interface PropsType {
  title: string;
  subTitle: string;
  peoples: string;
  role: string;
  skills: string;
  img?: string;
  video?: string;
  github?: string;
  website?: string;
}

interface FullScreenType extends HTMLVideoElement {
  mozRequestFullScreen?: () => void;
  webkitRequestFullscreen?: () => void;
  msRequestFullscreen?: () => void;
}

interface ContentKeyType {
  subTitle: string;
  peoples: string;
  role: string;
  skills: string;
}

const screenFn = [
  "requestFullscreen",
  "mozRequestFullScreen",
  "webkitRequestFullscreen",
  "msRequestFullscreen",
] as const;

const contentTitle: ContentKeyType = {
  subTitle: "# 개요",
  peoples: "# 인원",
  role: "# 맡은 역할",
  skills: "# 기술 스택",
};

export const Card = ({
  title,
  subTitle,
  peoples,
  role,
  skills,
  img,
  video,
  github,
  website,
}: PropsType) => {
  const videoRef = useRef<FullScreenType | null>(null);
  const fullScreen = () => {
    const { current } = videoRef;
    if (!current) return;
    for (const key of screenFn) {
      const fullScreenFn = current[key];
      if (fullScreenFn) {
        ((videoRef.current as FullScreenType)[key] as () => void)();
        break;
      }
    }
  };
  const content: ContentKeyType = {
    subTitle,
    peoples,
    role,
    skills,
  };
  return (
    <_Wrapper>
      {img && <_Img src={img} />}
      <_TitleWrapper>
        <_Text weight="bold">{title}</_Text>
        <_Footer>
          {video && (
            <_VideoWrapper onClick={() => fullScreen()}>
              <PlayVideo />
            </_VideoWrapper>
          )}
          {github && (
            <Link to={github}>
              <Github />
            </Link>
          )}
          {website && (
            <Link to={website}>
              <WebSite />
            </Link>
          )}
        </_Footer>
      </_TitleWrapper>
      {Object.entries(content).map(([key, value]) => (
        <_Featrue>
          <_SubTitle size="16px" weight="bold">
            {contentTitle[key as keyof ContentKeyType]}
          </_SubTitle>
          <_ContentText size="16px">{value}</_ContentText>
        </_Featrue>
      ))}
      {video && (
        <_Video ref={videoRef} controls>
          <source src={video} />
        </_Video>
      )}
    </_Wrapper>
  );
};

const _TitleWrapper = styled.div`
  width: 100%;
  text-align: center;
  position: relative;
  margin: 15px 0 30px;
  svg {
    width: 24px;
    height: 24px;
  }
`;

const _Footer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  gap: 20px;
  justify-content: center;
`;

const _Featrue = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  margin-bottom: 20px;
`;

const _SubTitle = styled(_Text)`
  width: 85px;
  white-space: nowrap;
`;

const _ContentText = styled(_Text)`
  width: 315px;
`;

const _Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.radius.medium};
`;

const _Img = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px 8px 0;
`;

const _Video = styled.video`
  position: absolute;
  z-index: -1;
  width: 2px;
  height: 1px;
  opacity: 0;
  :hover {
    opacity: 1;
  }
`;

const _VideoWrapper = styled.div`
  cursor: pointer;
`;
