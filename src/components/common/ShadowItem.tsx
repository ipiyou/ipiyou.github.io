import styled from "styled-components";
import { keyofRadius } from "../../style/theme";

export const ShadowItem = styled.div<{
  direction: "row" | "column";
  radius: keyofRadius;
}>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  align-items: center;
  border-radius: ${({ theme, radius }) => theme.radius[radius]};
  box-shadow: ${({ theme }) => theme.shadow.item};
  padding: 0 13px 0 20px;
`;
