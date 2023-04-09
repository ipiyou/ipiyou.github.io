import styled, { keyframes } from "styled-components";

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

export const Fire = () => (
  <_Wrapper>
    {stepColor.map((color, stepIdx) => {
      const itemCount = stepIdx * 2 + 5;
      const stepCount = stepIdx + 1;
      return (
        <_ColorStep step={stepCount} bottom={stepCount * 5}>
          {Array(itemCount)
            .fill(0)
            .map((_, itemIdx) => (
              <_Block
                color={color}
                second={itemIdx + 1}
                height={
                  5 * (stepCount * 2) + reduceHeight(itemCount)[itemIdx] * 10
                }
              />
            ))}
        </_ColorStep>
      );
    })}
  </_Wrapper>
);

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

const _Wrapper = styled.div`
  position: relative;
  width: 100px;
  height: 115px;
  z-index: 5;
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

const _Block = styled.div<{ color: string; height: number; second: number }>`
  width: 5px;
  height: ${({ height }) => height}px;
  border-radius: ${({ theme }) => theme.radius.large};
  background-color: ${({ color }) => color};
  box-shadow: 0 0 100px 10px ${({ color }) => color + "66"};
  transform-origin: bottom center;
  animation: ${fire} ${({ second }) => second * 0.25 + 4}s alternate infinite;
`;
