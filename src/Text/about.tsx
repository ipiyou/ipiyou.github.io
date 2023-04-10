import {
  EFTIS,
  KimTeaWan,
  Midas,
  OnPost,
  ProjectIntroduce,
  Scouit,
} from "../assets/img";
import { Fire } from "../components/Fire";
import { _Text } from "../components/common/Text";

export const about = [
  {
    name: "김태완",
    kinda: "반갑습니다",
    img: KimTeaWan,
    content: [
      {
        img: KimTeaWan,
        texts: [
          "안녕하세요! 저는 만드는 것을 좋아하며 성장하기 위해 노력하는 프론트엔드 김태완입니다.",
        ],
      },
      {
        texts: ["취미나 다른 좋아하는 활동이 있나요?"],
      },
      {
        img: KimTeaWan,
        texts: [
          "저는 주말에 게임을 하는 편입니다. 다만 몇 시간 한 후 주말 대부분 시간을 코딩하는데 사용합니다.",
          "그 외에도 운동하는 것을 좋아합니다.",
        ],
      },
      {
        texts: ["개발하면서 가장 중요하게 생각하시는 것은 무엇인가요?"],
      },
      {
        img: KimTeaWan,
        texts: [
          "저는 의지가 가장 중요하다 생각합니다.",
          "의자는 더 성장하기 위해 지속적으로 노력할 수 있습니다.",
          "의지가 떨어진다면 발전하는 것이 어렵고 프로젝트 진행하는 것이 힘들 것입니다.",
        ],
      },
      {
        texts: ["하고 싶은 말이 있나요?"],
      },
      {
        img: KimTeaWan,
        texts: [
          "저는 아직 실력이 부족한 주니어 개발자입니다.",
          "부족한 실력을 성장시키는 것이 즐겁고 성장하기 위해 방법을 찾고 있습니다.",
          "그 중 저와 맞는 회사를 찾는 것을 목표로 하고 있습니다.",
          "만약 맞는 회사에 들어간다면 회사와 같이 성장하며 더 나은 서비스를 만들고 싶습니다.",
          "감사합니다.",
          <Fire />,
        ],
      },
    ],
  },
  {
    name: "OnPost",
    kinda: "회고를 하며...",
    img: OnPost,
    content: [
      { texts: ["이 프로젝트에서 겪은 것을 설명해 주세요"] },
      {
        img: OnPost,
        texts: [
          "저는 이 프로젝트를 프론트엔드로서 마무리했습니다",
          "프론트와 백엔드 사이의 커뮤니케이션 문제로 결국 프론트가 나간다 말했습니다.",
          "제가 프론트를 맡게되면서 처음 배우게된 Typescript, axios, recoil을 사용해야했습니다",
          "작업량은 많고 시간이 적어 주말에도 만들자 말해서 약 한 달 반만에 만들 수 있었습니다.",
        ],
      },
      { texts: ["이 프로젝트를 통해 어떤 성장을 이루었나요?"] },
      {
        img: OnPost,
        texts: [
          "다양한 기술과 기능을 구현했던 프로젝트에 대한 경험을 얻을 수 있었습니다.",
          "이 프로젝트를 하기 이전 제가 만들었던 것은 todo list 정도였습니다. 다양한 기술과 기능을 구현함으로서 프론트엔드에 익술해 질 수 있는 계기가 되었습니다",
        ],
      },
    ],
  },
  {
    name: "EFTIS",
    kinda: "첫 개인프로젝트...",
    img: EFTIS,
    content: [
      { texts: ["이 프로젝트에서 겪은 것을 설명해 주세요"] },
      {
        img: EFTIS,
        texts: [
          "게임 타르코프에서 물건을 찾고 계산하는 것이 불편하다 생각해 만들게 되었습니다.",
          "리덕스를 적용하고 싶어 리덕스 redux-toolkit을 사용했습니다.",
          "이전에 프로젝트보다 더 나은 파일 구조를 구성하려 노력했습니다.",
        ],
      },
      { texts: ["이 프로젝트를 통해 어떤 성장을 이루었나요?"] },
      {
        img: EFTIS,
        texts: [
          "리덕스의 Flux패턴에 대해 알게되었습니다.",
          "vercel을 통해 간단하게 배포하는 법을 알았습니다",
        ],
      },
    ],
  },
  {
    name: "프소서",
    kinda: "첫 프론트와 협업을 하며...",
    img: ProjectIntroduce,
    content: [
      { texts: ["이 프로젝트에서 겪은 것을 설명해 주세요"] },
      {
        img: ProjectIntroduce,
        texts: [
          "마크다운 에디터를 직접 구현해야 했습니다.",
          "Github Flow와 애자일 방법론을 도입했습니다.",
        ],
      },
      { texts: ["이 프로젝트를 통해 어떤 성장을 이루었나요?"] },
      {
        img: ProjectIntroduce,
        texts: [
          "Github Flow를 통해 이슈 관리하는 방법을 알게 되었고. 애자일 방법론에서 KPT회고, 스트린트 백로그를 적용했습니다",
          ,
          "다음 목적을 이뤄나가는 과정에서 중간 점검을 하는 습관을 들였습니다.",
        ],
      },
    ],
  },
  {
    name: "마이다스 해커톤",
    kinda: "첫 대회를 나가며...",
    img: Midas,
    content: [
      { texts: ["이 프로젝트에서 겪은 것을 설명해 주세요"] },
      {
        img: ProjectIntroduce,
        texts: [
          "무박 1일 24시간 동안 진행하는 해커톤입니다",
          "전체적인 디자인이 아쉬웠습니다.",
        ],
      },
      { texts: ["이 프로젝트를 통해 어떤 성장을 이루었나요?"] },
      {
        img: ProjectIntroduce,
        texts: [
          "프로덕트는 기능이 중요하지만 디자인과 사용자 경험또한 중요한 것을 알았습니다",
        ],
      },
    ],
  },
  {
    name: "Scouit",
    kinda: "새로운 도전을 하며...",
    img: Scouit,
    content: [
      { texts: ["이 프로젝트에서 겪은 것을 설명해 주세요"] },
      {
        img: ProjectIntroduce,
        texts: [
          "현재 진행 중인 프로젝트입니다.",
          "PM을 맡고 있으며 더 나은 프로덕트를 만들기 위해 노력하고 있습니다.",
        ],
      },
      { texts: ["이 프로젝트를 통해 어떤 성장을 이루었나요?"] },
      {
        img: ProjectIntroduce,
        texts: [
          "코드 리뷰를 통해 더 나은 코드를 작성할 수 있었습니다.",
          "storybook을 통해 테스팅 할 수 있었습니다.",
        ],
      },
    ],
  },
];
