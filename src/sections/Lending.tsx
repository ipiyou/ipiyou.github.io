import { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { _Text } from "../components/common/Text";

const aboutMe = `성장하는 것을 즐기는
프론트엔드 김태완입니다`;

const stepColor = ["#fef1d9", "#ffeb6e", "#ff9c00", "#e20f00"];

const reduceHeight = (count: number) => {
  return Array(count)
    .fill(1)
    .map((_, idx) => {
      const center = Math.ceil(count / 2);
      const start1 = idx + 1;
      return center > start1 ? start1 % center : center * 2 - start1;
    });
};

export const Lending = () => {
  return (
    <_Wrapper>
      <_Text size="32px">{aboutMe}</_Text>
      <_FireWrapper>
        {stepColor.map((color, stepIdx) => {
          const itemCount = stepIdx * 2 + 5;
          const stepCount = stepIdx + 1;
          return (
            <_ColorStep step={stepCount} bottom={stepCount * 15}>
              {Array(itemCount)
                .fill(0)
                .map((_, itemIdx) => (
                  <_FireItem
                    color={color}
                    second={itemIdx + 1}
                    height={
                      30 * (stepCount * 2) +
                      reduceHeight(itemCount)[itemIdx] * 25
                    }
                  />
                ))}
            </_ColorStep>
          );
        })}
      </_FireWrapper>
    </_Wrapper>
  );
};

const fire = keyframes`
    0%{
        transform: scaleY(1)
    }
    20% {
        transform: scaleY(0.9)
    }
    40% {
        transform: scaleY(0.8)
    }
    60% {
        transform: scaleY(0.75)
    }
    80% {
        transform: scaleY(0.9);
    }
    100% {
        transform: scaleY(1);
    }
`;

const _Wrapper = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffebb4;
`;

const _FireWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  z-index: 3;
`;

const _ColorStep = styled.div<{ step: number; bottom: number }>`
  width: 100%;
  position: absolute;
  z-index: ${({ step }) => -step};
  bottom: ${({ bottom }) => bottom}px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const _FireItem = styled.div<{ color: string; height: number; second: number }>`
  width: 30px;
  height: ${({ height }) => height}px;
  border-radius: ${({ theme }) => theme.radius.large};
  background-color: ${({ color }) => color};
  box-shadow: 0 0 80px 20px ${({ color }) => color + "66"};
  transform-origin: bottom center;
  animation: ${fire} ${({ second }) => second * 0.25 + 4}s alternate infinite;
`;
