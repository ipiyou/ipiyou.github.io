import styled from "styled-components";
import { OnPost } from "../assets/img";
import { onPostVideo } from "../assets/videos";
import { Card } from "../components/Card";
import { ShadowItem } from "../components/common/ShadowItem";
import { _Text } from "../components/common/Text";
import { SectionTitle } from "../components/common/SectionTitle";

export const ProjectTimeLine = () => {
  return (
    <_Wrapper>
      <SectionTitle>Projects</SectionTitle>
      <_Content>
        <Card
          title="OnPost"
          subTitle="글을 작성해 올려 유저와 댓글로 소통할 수 있는 서비스"
          detail="거의 대부분의 역할을 당담했습니다!"
          img={OnPost}
          video={onPostVideo}
        >
          <div>
            <_Text size="24px"># 인원수</_Text>
            <_Text>프론트 2명, 백엔드 1명, 안드로이드 1명</_Text>
          </div>
          <div>
            <_Text size="24px"># 기술 스택</_Text>
            <_Text>React, Typescript, Axios, Recoil</_Text>
          </div>
          <div>
            <_Text size="24px"># 역할</_Text>
            <_Text>
              프로필 이름,이미지,비밀번호 변경 댓글 추가 삭제 글
              이름,내용,이미지 추가 수정
            </_Text>
          </div>
        </Card>
        <Card
          title="OnPost"
          subTitle="글을 작성해 올려 유저와 댓글로 소통할 수 있는 서비스"
          detail="거의 대부분의 역할을 당담했습니다!"
          img={OnPost}
          video={onPostVideo}
        >
          <div>
            <_Text># 인원수</_Text>
            <_Text size="18px">프론트 2명, 백엔드 1명, 안드로이드 1명</_Text>
          </div>
          <div>
            <_Text># 기술 스택</_Text>
            <_Text size="18px">React, Typescript, Axios, Recoil</_Text>
          </div>
          <div>
            <_Text># 역할</_Text>
            <_Text size="18px">
              프로필 이름,이미지,비밀번호 변경 댓글 추가 삭제 글
              이름,내용,이미지 추가 수정
            </_Text>
          </div>
        </Card>
      </_Content>
    </_Wrapper>
  );
};

const _Wrapper = styled.section`
  min-height: 100vh;
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
