import styled, { css } from "styled-components";
import { _Text } from "../components/common/Text";
import { skillList } from "../Text/Skills";
import { useScroll } from "../hooks/useScroll";
import { ScrollType } from "../App";
import { StopType, useCircle } from "../hooks/useCircle";
import { KimTeaWan } from "../assets/img";
import { Balloon } from "../components/Balloon";

export const SkillChart = ({ setScroll }: ScrollType) => {
  const ref = useScroll(setScroll, 2);
  const [moveDegree, circleXY, stop, setStop] = useCircle(500);
  return (
    <_Wrapper ref={ref} stop={stop}>
      <_SkillList>
        {skillList.map(({ degree, icon, percent, radius }) => (
          <_Item xy={circleXY(degree + moveDegree)}>
            <_SkillPercent radius={radius} color="white" size="24px">
              {percent}
            </_SkillPercent>
            {icon}
          </_Item>
        ))}
        <Balloon stop={stop} />
        <_Pictrue
          src={KimTeaWan}
          onMouseEnter={() => setStop(true)}
          onMouseLeave={() => setStop(false)}
        />
      </_SkillList>
    </_Wrapper>
  );
};

const _SkillList = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  border: 1px solid black;
  border-radius: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 40px 80px;
`;

const _Item = styled.div<{ xy: readonly [number, number] }>`
  position: absolute;
  transition: 1s;
  height: 84px;
  ${({ xy }) => {
    const [x, y] = xy;
    return css`
      left: ${x + 207}px;
      top: ${y + 207}px;
    `;
  }}
  > svg {
    width: 84px;
    height: 84px;
  }
`;

const _SkillPercent = styled(_Text)<{ radius: string }>`
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

const _Pictrue = styled.img`
  cursor: pointer;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  object-fit: cover;
`;

const _Wrapper = styled.section<StopType>`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.gray50};
  ${({ theme, stop }) => {
    return (
      stop &&
      css`
        transition: 0.5s;
        background-color: ${theme.color.gray100};
        ${_SkillPercent} {
          opacity: 1;
        }
      `
    );
  }}
`;
