import styled, { css } from "styled-components";
import { _Text } from "../components/common/Text";
import { skillList } from "../Text/Skills";
import { useScroll } from "../hooks/useScroll";
import { ScrollType } from "../App";
import { StopType, useCircle } from "../hooks/useCircle";
import { Balloon } from "../components/Balloon";
import { _SectionWrapper } from "../components/common/SectionWrapper";
import { useRef } from "react";
import { skillMedia } from "../media/media";
import { Img } from "../components/common/VifImage";
import { KimTeaWan } from "../assets";

export const SkillChart = ({ setScroll }: ScrollType) => {
  const ref = useScroll(setScroll, 2);
  const circleRef = useRef<HTMLDivElement | null>(null);
  const diameter = circleRef.current?.offsetWidth;
  const [moveDegree, circleXY, stop, setStop] = useCircle({ diameter });
  return (
    <_Wrapper ref={ref} stop={stop}>
      <_Circle ref={circleRef}>
        {skillList.map(({ degree, icon, percent, radius }) => (
          <_SKill xy={circleXY(degree + moveDegree)}>
            <_Percentage radius={radius} color="white" size="24px">
              {percent}
            </_Percentage>
            {icon}
          </_SKill>
        ))}
        <Balloon stop={stop} />
        <_Pictrue
          {...KimTeaWan}
          onMouseEnter={() => setStop(true)}
          onMouseLeave={() => setStop(false)}
          alt="기술 스택 프로필 카드"
        />
      </_Circle>
    </_Wrapper>
  );
};

const _Circle = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  border: 1px solid black;
  border-radius: ${({ theme }) => theme.radius.circle};
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  ${skillMedia(`
    width: 250px;
    height: 250px;
  `)}
`;

const _SKill = styled.div<{ xy: readonly [number, number] }>`
  position: absolute;
  height: 100%;
  transition: 1s;
  height: 84px;
  ${({ xy }) => {
    const [x, y] = xy;
    return css`
      left: ${x}px;
      top: ${y}px;
    `;
  }}
  > svg {
    width: 84px;
    height: 84px;
  }
`;

const _Percentage = styled(_Text)<{ radius: string }>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
  border-radius: ${({ radius }) => radius};
  background-color: ${({ theme }) => theme.color.black + "7F"};
`;

const _Pictrue = styled(Img)`
  cursor: pointer;
  width: 100px;
  height: 100px;
  border-radius: ${({ theme }) => theme.radius.circle};
  object-fit: cover;
`;

const _Wrapper = styled(_SectionWrapper)<StopType>`
  ${({ theme, stop }) => {
    return (
      stop &&
      css`
        transition: 0.5s;
        background-color: ${theme.color.gray100};
        ${_Percentage} {
          opacity: 1;
        }
      `
    );
  }}
`;
