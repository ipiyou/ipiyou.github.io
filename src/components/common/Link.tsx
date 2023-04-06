import styled from "styled-components";
import { ReactNode } from "react";

interface PropsType {
  to: string;
  children: ReactNode;
}

export const Link = ({ to, children }: PropsType) => {
  return (
    <_Wrapper target="_blank" href={to}>
      {children}
    </_Wrapper>
  );
};

const _Wrapper = styled.a``;
