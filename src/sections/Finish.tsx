import styled from "styled-components";
import { SectionTitle } from "../components/common/SectionTitle";
import { Card } from "../components/Card";
import { _Text } from "../components/common/Text";
import { KimTeaWan, MyGithub } from "../assets/img";
import { ShadowItem } from "../components/common/ShadowItem";

export const Finish = () => {
  return (
    <_Wrapper>
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
          title="김태완"
          subTitle="성장하며 나아갑니다. 
          코딩을 샌드박스형 게임이라 생각합니다"
          detail="저는 맡은 일은 끝내기 위해 노력하고
          성장하는 것을 중요하게 생각합니다.
          이러한 저와 가치관이 맞는 회사와 함께하고 싶습니다."
          img={MyGithub}
          github="https://github.com/ipiyou"
        >
          <div>
            <_Text># 생년월일</_Text>
            <_Text size="18px">2005.02.27</_Text>
          </div>
          <div>
            <_Text># 학교</_Text>
            <_Text size="18px">대덕소프트웨어마이스터고등학교</_Text>
          </div>
          <div>
            <_Text># 집</_Text>
            <_Text size="18px">대전 대덕구 신탄진</_Text>
          </div>
          <div>
            <_Text># 전화번호</_Text>
            <_Text size="18px">010-7355-9975</_Text>
          </div>
          <div>
            <_Text># 이메일</_Text>
            <_Text size="18px">tao710803@gmail.com</_Text>
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

const _TagContent = styled.div`
  position: absolute;
  width: 100%;
  height: 50px;
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
