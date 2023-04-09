import {
  EFTIS,
  KimTeaWan,
  Midas,
  MyGithub,
  OnPost,
  ProjectIntroduce,
  Scouit,
} from "../assets/img";
import { _Text } from "../components/common/Text";

const aboutContent = [
  { name: "# 생년월일", content: "2005.02.27" },
  { name: "# 학교", content: "대덕소프트웨어마이스터고등학교" },
  { name: "# 집", content: "대전 대덕구 신탄진" },
  { name: "# 전화번호", content: "010-7355-9975" },
  { name: "# 이메일", content: "tao710803@gmail.com" },
];

export const about = [
  {
    name: "김태완",
    kinda: "반갑습니다",
    img: KimTeaWan,
    content: [{ img: KimTeaWan, texts: ["앙기모띠"] }],
  },
  {
    name: "OnPost",
    kinda: "회고를 하며...",
    img: OnPost,
    content: [{ img: OnPost, texts: ["안되용"] }],
  },
  {
    name: "EFTIS",
    kinda: "첫 개인프로젝트...",
    img: EFTIS,
    content: [{ img: EFTIS, texts: ["버큐"] }],
  },
  {
    name: "프소서",
    kinda: "첫 프론트와 협업을 하며...",
    img: ProjectIntroduce,
    content: [{ img: ProjectIntroduce, texts: ["잉"] }],
  },
  {
    name: "마이다스 해커톤",
    kinda: "첫 대회를 나가며...",
    img: Midas,
    content: [{ img: Midas, texts: ["숏"] }],
  },
  {
    name: "Scouit",
    kinda: "새로운 도전을 하며...",
    img: Scouit,
    content: [{ img: Scouit, texts: ["ㅗ"] }],
  },
];
