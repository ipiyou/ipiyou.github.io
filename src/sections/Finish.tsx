import styled from "styled-components";
import { SectionTitle } from "../components/common/SectionTitle";
import { Card } from "../components/Card";
import { _Text } from "../components/common/Text";
import { KimTeaWan, MyGithub } from "../assets/img";
import { ShadowItem } from "../components/common/ShadowItem";
import { useScroll } from "../hooks/useScroll";
import { ScrollType } from "../App";
import { about } from "../Text/about";

export const Finish = ({ setScroll }: ScrollType) => {
  const ref = useScroll(setScroll, 4);
  const { title, subTitle, detail, img, github, content } = about;
  return (
    <_Wrapper ref={ref}>
      <SectionTitle>Abouut</SectionTitle>
      <_Content>
        <_TagCard>
          <_TagBackground src={KimTeaWan} />
          <_TagContent>
            <_Text size="18px" color="blue">
              # 열정
            </_Text>
            <_Text size="18px" color="blue">
              # 노력
            </_Text>
          </_TagContent>
        </_TagCard>
        <Card
          title={title}
          subTitle={subTitle}
          detail={detail}
          img={img}
          github={github}
        >
          {content}
        </Card>
      </_Content>
    </_Wrapper>
  );
};

const _Wrapper = styled.section`
  height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 120px;
`;

const _Content = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px 100px;
`;

const _TagContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  opacity: 0;
  display: flex;
  align-items: center;
  padding: 16px;
  gap: 10px;
  transition: 0.25s;
  border-radius: 0 0 8px 8px;
  background-color: ${({ theme }) => theme.color.white};
`;

const _TagBackground = styled.img`
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.radius.medium};
`;

const _TagCard = styled(ShadowItem)`
  position: relative;
  width: 400px;
  height: 500px;
  background-color: ${({ theme }) => theme.color.white};
  padding: 0;
  :hover {
    ${_TagContent} {
      opacity: 1;
    }
  }
`;
