import styled from "styled-components";
import { keyOfColor } from "../../style/theme";

export const _Text = styled.div<{ color: keyOfColor; size: string }>`
  color: ${({ theme, color }) => theme.color[color]};
  size: ${({ size }) => size};
`;
