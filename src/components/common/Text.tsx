import styled from "styled-components";
import { keyOfColor } from "../../style/theme";

export const _Text = styled.div<{
  color?: keyOfColor;
  size?: string;
  weight?: "bold";
}>`
  color: ${({ theme, color = "black" }) => theme.color[color]};
  font-size: ${({ size = "20px" }) => size};
  font-weight: ${({ weight = "regular" }) => weight};
`;
