import { ReactNode } from "react";
import styled from "styled-components";
import { _Text } from "./Text";
import { Smoke } from "../../assets/img";
interface PropsType {
  children: ReactNode;
}

export const SectionTitle = ({ children }: PropsType) => {
  return (
    <_Wrapper>
      <_Text size="32px" weight="bold">
        <_Img src={Smoke} />
        {children}
      </_Text>
    </_Wrapper>
  );
};

const _Wrapper = styled.div`
  position: relative;
  width: 200px;
  margin: 20px 0 120px;
  ${_Text} {
    text-align: center;
  }
`;

const _Img = styled.img`
  width: 200px;
  height: 100px;
  top: 80px;
  z-index: -1;
  opacity: 0.4;
  position: relative;
`;
