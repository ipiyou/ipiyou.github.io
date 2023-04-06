import { ReactNode, useState } from "react";
import styled, { css } from "styled-components";
import { Typescript } from "../assets/svg";
import { ShadowContent, ShadowItem } from "./common/ShadowItem";
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
      <_SkillTitle margin="15px 0 20px" weight="bold">
        {title}
      </_SkillTitle>
      {icon}
      <_Content>
        <_Text size="18px">{content}</_Text>
      </_Content>
    </_SkillItem>
  );
};

const _SkillTitle = styled(_Text)`
  position: relative;
  z-index: 5;
`;

const _SkillItem = styled(ShadowItem)<{ show: boolean }>`
  cursor: pointer;
  position: relative;
  width: 300px;
  height: 200px;
  transition: 0.25s;
  background-color: ${({ theme }) => theme.color.white + "BB"};
  ${({ show, theme }) =>
    show &&
    css`
      > ${ShadowContent} {
        opacity: 1;
      }
      > ${_SkillTitle} {
        color: ${theme.color.white};
      }
    `};
  :hover {
    opacity: 70%;
  }
`;

const _Content = styled(ShadowContent)`
  padding: 0 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
