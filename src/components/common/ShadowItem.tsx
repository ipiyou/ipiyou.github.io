import styled from "styled-components";
import { keyofRadius } from "../../style/theme";
import { _Text } from "./Text";

export const ShadowItem = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.radius.medium};
  box-shadow: ${({ theme }) => theme.shadow.item};
  padding: 0 13px 0 20px;
`;

export const ShadowContent = styled.div`
  position: absolute;
  opacity: 0;
  transition: 0.25s;
  width: 100%;
  height: 100%;
  left: 0;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.black};
  border-radius: ${({ theme }) => theme.radius.medium};
  ${_Text} {
    color: ${({ theme }) => theme.color.white};
  }
`;
