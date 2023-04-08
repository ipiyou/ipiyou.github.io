import styled from "styled-components";
import { _Text } from "./common/Text";
import { StopType } from "../hooks/useCircle";
import { skillHoverText, skillNotHoverText } from "../Text/Skills";

export const Balloon = ({ stop }: StopType) => {
  return (
    <_BalloonWrapper>
      <_Balloon size="14px">
        <_BalllonChangeText stop={stop}>{skillNotHoverText}</_BalllonChangeText>
        <_BalllonChangeText stop={!stop}>{skillHoverText}</_BalllonChangeText>
      </_Balloon>
      <_Triangle />
    </_BalloonWrapper>
  );
};

const _BalloonWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 85px;
`;

const _Balloon = styled(_Text)`
  position: relative;
  width: 280px;
  height: 100px;
  border-radius: ${({ theme }) => theme.radius.medium};
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.shadow.item};
`;

const _BalllonChangeText = styled.div<StopType>`
  position: absolute;
  padding: 10px 12px;
  transition: 0.5s;
  opacity: ${({ stop }) => (stop ? 0 : 1)};
`;

const _Triangle = styled.div`
  border-bottom: 10px solid transparent;
  border-top: 10px solid ${({ theme }) => theme.color.white};
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
`;
