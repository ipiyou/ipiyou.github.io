import styled from "styled-components";
import { keyofRadius } from "../../style/theme";

export const ShadowItem = styled.div<{
  direction?: "row" | "column";
  radius?: keyofRadius;
}>`
  width: fit-content;
  display: flex;
  flex-direction: ${({ direction = "row" }) => direction};
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: ${({ theme, radius = "small" }) => theme.radius[radius]};
  box-shadow: ${({ theme }) => theme.shadow.item};
  padding: 0 13px 0 20px;
`;
