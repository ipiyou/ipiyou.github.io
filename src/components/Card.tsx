import { useRef } from "react";
import styled, { css } from "styled-components";
import { Github, PlayVideo, WebSite } from "../assets/svg";
import { _Text } from "./common/Text";
import { Link } from "./common/Link";
import { projectMedia } from "../media/media";
import { Img } from "./common/VifImage";

interface PropsType {
  title: string;
  subTitle: string;
  peoples: string;
  role: string;
  skills: string;
  img?: { src: string; avif: string; webp: string };
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
    if (!videoRef.current) return;
    for (const key of screenFn) {
      if (videoRef.current[key]) {
        (videoRef.current[key] as () => void)();
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
      {img && <_Img {...img} alt="프로젝트 이미지 카드" />}
      <_NameWrapper>
        <_Text weight="bold">{title}</_Text>
        <_Footer>
          {video && (
            <_VideoWrapper onClick={fullScreen}>
              <PlayVideo />
            </_VideoWrapper>
          )}
          {github && (
            <Link to={github} area_label="project github">
              <Github />
            </Link>
          )}
          {website && (
            <Link to={website} area_label="deploy website url">
              <WebSite />
            </Link>
          )}
        </_Footer>
      </_NameWrapper>
      {Object.entries(content).map(([key, value]) => (
        <_Content>
          <_SubTitle size="16px" weight="bold">
            {contentTitle[key as keyof ContentKeyType]}
          </_SubTitle>
          <_ContentText size="14px">{value}</_ContentText>
        </_Content>
      ))}
      {video && (
        <_Video ref={videoRef} controls>
          <source src={video} />
        </_Video>
      )}
    </_Wrapper>
  );
};

const _NameWrapper = styled.div`
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

const _Content = styled.div`
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
  max-height: 600px;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.radius.medium};
`;

const _Img = styled(Img)`
  width: 100%;
  height: 200px;
  object-fit: cover;
  ${({ theme }) => {
    const radius = theme.radius.medium;
    return css`
      border-radius: ${radius} ${radius} 0;
    `;
  }};
  ${projectMedia(`
    display: none;
  `)}
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
