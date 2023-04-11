import { useState, useEffect, ReactNode } from "react";
import styled from "styled-components";
import { _Text } from "../components/common/Text";
import { useScroll } from "../hooks/useScroll";
import { ScrollType } from "../App";
import { aboutMe } from "../Text/lending";
import { _SectionWrapper } from "../components/common/SectionWrapper";
import { Img } from "../components/common/VifImage";

interface ChildrenType {
  children: ReactNode;
}

const Title = ({ children }: ChildrenType) => (
  <_Title size="32px" weight="bold" color="white">
    {children}
  </_Title>
);

export const Lending = ({ setScroll }: ScrollType) => {
  const ref = useScroll(setScroll, 1);
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      setTime((time + 1) % 4);
    }, 3000);
  }, [time]);

  const { title, imgs } = aboutMe;

  return (
    <_Wrapper ref={ref}>
      <Title>{title[0]}</Title>
      <Title>{title[1]}</Title>
      {imgs.map((src, idx) => (
        <_Background {...src} isCurrentImg={idx === time} />
      ))}
    </_Wrapper>
  );
};

const _Title = styled(_Text)`
  position: relative;
  z-index: 2;
`;

const _Wrapper = styled(_SectionWrapper)`
  height: 100vh;
  background-color: ${({ theme }) => theme.color.black};
`;

const _Background = styled(Img)<{ isCurrentImg: boolean }>`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: 1s;
  opacity: ${({ isCurrentImg }) => (isCurrentImg ? 0.5 : 0)};
  object-fit: cover;
`;
