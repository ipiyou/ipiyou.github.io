import { ReactNode, useState } from "react";
import styled, { css } from "styled-components";
import { Typescript } from "../assets/svg";
import { ShadowItem } from "./common/ShadowItem";
import { _Text } from "./common/Text";

interface PropsType {
  title: string;
  content: string;
  icon: ReactNode;
}

export const SkillItem = ({ title, content, icon }: PropsType) => {
  const [contentShow, setContent] = useState<boolean>(false);
  return (
    <_SkillItem onClick={() => setContent(!contentShow)} show={contentShow}>
      <_SkillTitle size="24px">{title}</_SkillTitle>
      <_Content>
        <_Text>{content}</_Text>
      </_Content>
      <_Content>{icon}</_Content>
    </_SkillItem>
  );
};

const _SkillTitle = styled(_Text)`
  position: absolute;
  top: 15px;
`;

const _SkillItem = styled(ShadowItem)<{ show: boolean }>`
  cursor: pointer;
  position: relative;
  width: 300px;
  height: 200px;
  transition: 0.25s;
  background-color: ${({ theme }) => theme.color.white + "BB"};
  background-color: ${({ show, theme }) => show && theme.color.black};
  ${_SkillTitle} {
    color: ${({ show, theme }) => show && theme.color.white};
  }
  ${({ show, theme }) => css`
    > ${_Content} {
      ${show ? _Text : "svg"} {
        opacity: 1;
        color: ${theme.color.white};
      }
      ${!show ? _Text : "svg"} {
        opacity: 0;
      }
    }
  `};
  :hover {
    opacity: 70%;
  }
`;

const _Content = styled.div`
  position: absolute;
  padding: 0 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
