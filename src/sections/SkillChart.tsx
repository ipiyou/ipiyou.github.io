import styled from "styled-components";
import {
  Javascript,
  React,
  Recoil,
  Redux,
  Styled,
  Typescript,
} from "../assets/svg";
import { _Text } from "../components/common/Text";
import { SkillItem } from "../components/SkillItem";
import { skillList } from "../Text/Skills";
import { SectionTitle } from "../components/common/SectionTitle";

export const SkillChart = () => {
  return (
    <_Wrapper>
      <SectionTitle>SKILL</SectionTitle>
      <_SkillList>
        {skillList.map(({ title, icon, content }) => (
          <SkillItem title={title} icon={icon} content={content || ""} />
        ))}
      </_SkillList>
    </_Wrapper>
  );
};

const _Wrapper = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const _Title = styled(_Text)`
  margin: 120px 0;
`;

const _SkillList = styled.div`
  max-width: 1200px;
  display: flex;
  padding: 16px 0;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px 80px;
`;
