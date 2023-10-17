import { EFTIS, Repo, OnPost, Texier } from "../assets";
import { ProjectIntroduceVideo, onPostVideo } from "../assets/videos";
import { _Text } from "../components/common/Text";

export const projects = [
  {
    title: "onPost",
    subTitle: "글을 작성해 올려 유저와 댓글로 소통할 수 있는 서비스",
    peoples: "프론트 2명과 백엔드 1명 안드로이드 1명으로 이루어져 있습니다",
    role: "프로필 이름,이미지, 비밀번호 변경, 댓글 추가 삭제, 글 이름,내용,이미지 추가 수정",
    skills: "React Typescript Axios Recoil",
    img: OnPost,
    video: onPostVideo,
    github: "https://github.com/ON-DSM/OnPost_FrontEnd",
  },
  {
    title: "EFTIS",
    subTitle: "게임 타르코프 게임 아이템을 검색할 수 있는 사이트입니다.",
    peoples: "개인 프로젝트입니다.",
    role: "아이템 무한 스크롤 ,최근 검색 내용 확인",
    skills: "React Typescript redux-toolkit graphql",
    img: EFTIS,
    website: "https://eftis.vercel.app/",
    github: "https://github.com/ipiyou/EFTIS",
  },
  {
    title: "Repo",
    subTitle: "선생님의 학생 관리와 학생의 포트폴리오의 관리를 도와주는 서비스입니다.",
    peoples: "교내 동아리에서 만드는 프로젝트입니다.",
    role: "피드백 확인 및 완료, 이력서 작성, 미리보기, 이력서 피드백 요청,학생 리스트, 기술 스택 추가 삭제, 학생 이력서 확인 및 피드백, 이력서 공개 여부, 학생 이력서(PDF) 확인 및 저장 ",
    skills: "NextJs Typescript React-query Tailwind",
    img: Repo,
    github: "https://github.com/MoonMinJeong/PSS",
  },
  {
    title: "Texier",
    subTitle:
      "장애인들을 위한 택시 서비스입니다",
    peoples: "교내에서 진행한 2박 3일 해커톤으로 프론트 2명 백엔드 1명 디자인 1명으로 이루어졌습니다.",
    role: "검색 시 해당 키워드에 맞는 지역 표시 지도를 클릭하거나 검색에 표시된 지역의 버튼 클릭 시 출발, 도착 위치 변경, 고객 위치 확인 고객 택시콜 수락",
    skills: "React Typescript React-Query Styled-Component",
    img: Texier,
    github: "https://github.com/MIDAS-YOUNG-TALENT-CHALLENGE/front",
  },
];
