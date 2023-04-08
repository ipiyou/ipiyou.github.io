import styled, { css } from "styled-components";

interface PropsType {
  direction?: "left" | "right";
  onClick?: () => void;
}

export const Arrow = ({ direction, onClick }: PropsType) => (
  <_Svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    direction={direction}
    onClick={onClick}
  >
    <path
      d="M12.5 17L5 9.5L12.5 2L13.8312 3.33125L7.6625 9.5L13.8312 15.6688L12.5 17Z"
      fill="#555555"
    />
  </_Svg>
);

const _Svg = styled.svg<PropsType>`
  cursor: pointer;
  transform: ${({ direction = "left" }) =>
    css`rotate(${
      {
        right: 180,
        left: 0,
      }[direction]
    }deg)`};
`;
