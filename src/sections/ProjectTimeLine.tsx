import styled from "styled-components";
import { OnPost } from "../assets/img";
import { onPostVideo } from "../assets/videos";
import { Card } from "../components/Card";
import { ShadowItem } from "../components/common/ShadowItem";
import { _Text } from "../components/common/Text";
import { SectionTitle } from "../components/common/SectionTitle";
import { useScroll } from "../hooks/useScroll";
import { ScrollType } from "../App";
import { projects } from "../Text/Project";

export const ProjectTimeLine = ({ setScroll }: ScrollType) => {
  const ref = useScroll(setScroll, 3);
  return (
    <_Wrapper ref={ref}>
      <SectionTitle>Projects</SectionTitle>
      <_Content>
        {projects.map(
          ({ title, subTitle, detail, img, video, github, content }) => (
            <Card
              title={title}
              subTitle={subTitle}
              detail={detail}
              img={img}
              video={video}
              github={github}
            >
              {content}
            </Card>
          )
        )}
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
