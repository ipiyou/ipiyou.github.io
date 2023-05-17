import { EFTIS, Midas, OnPost, ProjectIntroduce, Scouit } from "../assets";
import { ProjectIntroduceVideo, onPostVideo } from "../assets/videos";
import { _Text } from "../components/common/Text";

export const projects = [
  {
    title: "onPost",
    subTitle: "글을 작성해 올려 유저와 댓글로 소통할 수 있는 서비스",
    peoples: "프론트 2명과 백엔드 1명 안드로이드 1명으로 이루어져 있습니다",
    role: "프로필 이름,이미지, 비밀번호 변경, 댓글 추가 삭제, 글 이름,내용,이미지 추가 수정",
    skills: "React, Typescript, Axios, Recoil",
    img: OnPost,
    video: onPostVideo,
    github: "https://github.com/ON-DSM/OnPost_FrontEnd",
  },
  {
    title: "EFTIS",
    subTitle: "게임 타르코프 게임 아이템을 검색할 수 있는 사이트입니다.",
    peoples: "개인 프로젝트입니다.",
    role: "아이템 무한 스크롤 ,최근 검색 내용 확인",
    skills: "React, Typescript, redux-toolkit, graphql",
    img: EFTIS,
    website: "https://eftis.vercel.app/",
    github: "https://github.com/ipiyou/EFTIS",
  },
  {
    title: "프소서",
    subTitle: "토이 프로젝트를 실제로 사용할 수 있도록 도와주는 서비스입니다.",
    peoples: "프론트 3명과  백엔드 1명입니다.",
    role: "태그 추가 삭제, 버튼 클릭시 현재 커서에 텍스트 추가, 텍스트 작성시 마크다운 적용, 글 작성시 이미지 추가",
    skills: "React, Typescript, Axios, React-query, Marked",
    img: ProjectIntroduce,
    video: ProjectIntroduceVideo,
    github: "https://github.com/MoonMinJeong/PSS",
  },
  {
    title: "마이다스",
    subTitle:
      "마이다스에서 진행한 해커톤으로 유연근무제 관리 서비스를 주제로 만들었습니다",
    peoples: "프론트 2명과 백엔드 1명입니다.",
    role: "근무자 일한 시간,출퇴근 확인, 업무 수정,삭제, 업무 난위도와 장소, 대상 선정, 지원자 클릭시 지원자 업무 내역 확인",
    skills: "React, Typescript, Axios, Styled-Component",
    img: Midas,
    github: "https://github.com/MIDAS-YOUNG-TALENT-CHALLENGE/front",
  },
  {
    title: "scouit (진행 중)",
    subTitle:
      "협업을 주제로 연합동아리 공고,프로젝트 모집,채용 공고 활동을 지원하는 서비스입니다",
    peoples: "프론트 1명과 백엔드 1명 그리고 디자인 2명입니다.",
    role: "디자인시스템(input,textarea,calender,button,img list)",
    skills:
      "React, Typescript, Axios, React-query, Styled-Component, Recoil, Storybook",
    img: Scouit,
    github: "https://github.com/orgs/scouit/repositories",
  },
];
