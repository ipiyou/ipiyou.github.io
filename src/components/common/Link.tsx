import styled from "styled-components";
import { ReactNode } from "react";

interface PropsType {
  to: string;
  children: ReactNode;
  area_label?: string;
}

export const Link = ({ to, children,area_label }: PropsType) => {
  return (
    <_Wrapper target="_blank" href={to} aria-label={area_label}>
      {children}
    </_Wrapper>
  );
};

const _Wrapper = styled.a`
  text-decoration: none;
  color: black;
  :hover {
    text-decoration: underline;
  }
`;
