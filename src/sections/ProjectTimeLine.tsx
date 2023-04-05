import styled from "styled-components";
import { OnPost } from "../assets/img";
import { onPostVideo } from "../assets/videos";
import { Card } from "../components/Card";
import { ShadowItem } from "../components/common/ShadowItem";
import { _Text } from "../components/common/Text";

export const ProjectTimeLine = () => {
  return (
    <_Wrapper>
      <_Text size="30px" weight="bold" margin="120px 0">
        Start FrontEnd
      </_Text>
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
      </_Content>
    </_Wrapper>
  );
};

const _Wrapper = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const _Content = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px 100px;
`;

const _Station = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  gap: 40px;
  padding: 40px 0;
`;

const _PreviewBack = styled.img`
  width: 100%;
  border-radius: ${({ theme }) => theme.radius.medium};
`;

const _Preview = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 500px;
  width: 100%;
  background-color: ${({ theme }) => theme.color.black};
  border-radius: ${({ theme }) => theme.radius.medium};
  :hover {
    ${_PreviewBack} {
      opacity: 30%;
      transition: 0.25s;
    }
  }
`;

const _SvgWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  > svg {
    visibility: hidden;
    position: relative;
    z-index: 2;
    transition: 0.25;
  }
  :hover {
    > svg {
      visibility: visible;
    }
  }
`;

const _TimeLine = styled.div`
  width: 10px;
  height: 100px;
  background-color: ${({ theme }) => theme.color.black};
  border-radius: ${({ theme }) => theme.radius.large};
`;

const _TitleItem = styled(ShadowItem)`
  padding: 5px 40px;
  font-size: 20px;
  font-weight: bold;
`;
