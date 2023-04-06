import { ReactNode, useRef } from "react";
import styled from "styled-components";
import { Github, PlayVideo, WebSite } from "../assets/svg";
import { ShadowContent, ShadowItem } from "./common/ShadowItem";
import { _Text } from "./common/Text";

interface PropsType {
  title: string;
  subTitle: string;
  detail: string;
  img?: string;
  video?: string;
  children: ReactNode;
}

interface FullScreenType extends HTMLVideoElement {
  mozRequestFullScreen?: () => void;
  webkitRequestFullscreen?: () => void;
  msRequestFullscreen?: () => void;
}

const screenFn = [
  "requestFullscreen",
  "mozRequestFullScreen",
  "webkitRequestFullscreen",
  "msRequestFullscreen",
] as const;

export const Card = ({
  title,
  subTitle,
  detail,
  img,
  video,
  children,
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
  return (
    <_Wrapper>
      {img && <_Img src={img} />}
      <_Content>
        <_Text size="32px" weight="bold">
          {title}
        </_Text>
        <_Text size="16px" margin="20px 0 0" weight="bold">
          {subTitle}
        </_Text>
        <_Text size="14px" margin="30px 0 0">
          {detail}
        </_Text>
      </_Content>
      <_HoverContent>
        {video && (
          <_Video ref={videoRef} controls>
            <source src={video} />
          </_Video>
        )}
        {children}
      </_HoverContent>
      <_Footer>
        <div onClick={() => fullScreen()}>
          <PlayVideo />
        </div>
        <Github />
        <WebSite />
      </_Footer>
    </_Wrapper>
  );
};

const _Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 40px;
`;

const _HoverContent = styled(ShadowContent)`
  gap: 30px;
  padding: 50px 40px;
`;

const _Wrapper = styled(ShadowItem)`
  position: relative;
  flex-direction: column;
  width: 400px;
  height: 500px;
  padding: 0;
  :hover {
    ${_HoverContent} {
      opacity: 1;
    }
    path {
      fill: ${({ theme }) => theme.color.white};
    }
  }
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

const _Footer = styled.div`
  position: absolute;
  width: 100%;
  height: 50px;
  bottom: 0;
  left: 0;
  display: flex;
  gap: 20px;
  justify-content: center;
`;
