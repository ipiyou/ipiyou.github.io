import {
  EFTIS,
  ImageType,
  KimTeaWan,
  Texier,
  OnPost,
  Repo,
  Unit,
} from "../assets";
import { Fire } from "../components/Fire";
import { _Text } from "../components/common/Text";
import { ReactNode } from "react";

interface ChatType {
  img?: ImageType;
  texts: (string | ReactNode)[];
}

interface ProjectUnionType {
  name: string;
  kinda: string;
  img: ImageType;
}

interface TransformType extends ProjectUnionType {
  content: [string[], string[]];
}

interface UserChatType extends ProjectUnionType {
  content: ChatType[];
}

const projectText = (index: number) => ({
  texts: [
    ["이 프로젝트에서 겪은 것을 설명해 주세요"],
    ["이 프로젝트를 통해 어떤 성장을 이루었나요?"],
  ][index],
});

function projectChats(chats: TransformType) {
  const img = chats.img;
  // 채팅방 형식이기에 1칸씩 나누는 것이 가독성에 좋아보임
  return {
    ...chats,
    content: [
      projectText(0),
      { texts: chats.content[0], img },
      projectText(1),
      { texts: chats.content[1], img },
    ],
  };
}

export const about: UserChatType[] = [
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
  projectChats({
    name: "OnPost",
    kinda: "회고를 하며...",
    img: OnPost,
    content: [
      [
        "저는 이 프로젝트를 프론트엔드로서 마무리했습니다",
        "프론트와 백엔드 사이의 커뮤니케이션 문제로 결국 프론트가 나간다 말했습니다.",
        "제가 프론트를 맡게되면서 처음 배우게된 Typescript, axios, recoil을 사용해야했습니다",
        "작업량은 많고 시간이 적어 주말에도 만들자 말해서 약 한 달 반만에 만들 수 있었습니다.",
      ],

      [
        "다양한 기술과 기능을 구현했던 프로젝트에 대한 경험을 얻을 수 있었습니다.",
        "이 프로젝트를 하기 이전 제가 만들었던 것은 todo list 정도였습니다. 다양한 기술과 기능을 구현함으로서 프론트엔드에 익술해 질 수 있는 계기가 되었습니다",
      ],
    ],
  }),

  projectChats({
    name: "EFTIS",
    kinda: "첫 개인프로젝트...",
    img: EFTIS,
    content: [
      [
        "게임 타르코프에서 물건을 찾고 계산하는 것이 불편하다 생각해 만들게 되었습니다.",
        "리덕스를 적용하였고 이후 redux-toolkit으로 마이그레이션했습니다.",
        "이전에 프로젝트보다 더 나은 파일 구조를 구성하려 노력했습니다.",
      ],

      [
        "리덕스의 Flux패턴에 대해 알게되었습니다.",
        "vercel을 통해 간단하게 배포하는 법을 알았습니다",
      ],
    ],
  }),
  projectChats({
    name: "REPO",
    kinda: "여러 다양한 기능...",
    img: Repo,
    content: [
      [
        "pdf 기능과 이력서 작성에서 textField 컴포넌트를 만다는 데 흥미로웠습니다.",
        "캘린더같은 기능 구현이 재밌는 것과 태그 추가와 같이 반복되는 컴포넌트 관리가 필요한 부분이 좋았습니다",
        "그 외에도 PDF나 피드백 관리같은 부분도 만드는 데 보람을 느꼈습니다",
        "yarn에 workspace로 모노레포를 구성하고 packages에서 공통된 부분을 관리했습니다",
        "라이브러리가 많아질 것을 우려해 yarn berry로 속도와 의존성을 단순하게 했습니다"
      ],
      [
        "yarn의 workspace와 berry를 사용해 보며 두 기술 장점을 살펴보며 사용해 볼 수 있었습니다.",
        "프로젝트를 진행하며 다른 백엔드분이 요청한 요구사항을 수정하며 협업했습니다.",
      ],
    ],
  }),
  projectChats({
    name: "Texier",
    kinda: "교내 해커톤을 겪으며...",
    img: Texier,
    content: [
      [
        "카카오맵을 통해 고객이 위치를 작성하고 기사님이 고객 위치를 확인할 수 있습니다",
        "다른 주니어 프론트분과 대화하며 업무분담에 관해 고민해 결국 퍼블리싱 업무를 주로 분담했습니다. 다만 시간이 부족했지만 조금 더 케어해 주었다면 작업 마무리와 성장시켜 줄 수 있어서 아쉬웠습니다",
      ],
      [
        "카카오맵을 통해 좌표를 계산해 주소로 표시하는 기능 등 카카오맵에 제공해 주는 api를 사용하는 경험을 했습니다."
      ],
    ],
  }),
  {
    name: "컴퍼니랩",
    kinda: "첫 회사를 다니며...",
    img: Unit,
    content: [
      { texts: ["회사에서 어떤 역할을 맡으셨나요?"] },
      {
        texts: [
          "세이브택스 홈페이지를 주로 유지보수 했으며",
          "nestJs를 통해 airtable에 유저 데이터를 저장하는 기능을 만들었습니다",
          "또 headlessCMS를 사용해 블로그와 헬프센터를 만들었습니다"
        ], img: Unit
      },
      { texts: ["회사에서 다닌 소감은 어떠신가요?"] },
      {
        texts: [
          "학교에서 배우던 것과 달리 새로운 것을 진행하는 것보다 유지보수를 하는 것이 더 많았습니다. QA를 진행하기에 여러 번 디자이너분께 검사와 요청이 들어왔습니다",
          "기획부터 배포까지 진행하기 떄문에 학교와 달리 배포 방식이나 유저 데이터를 분석을 많이 확인할 수 있었습니다"
        ], img: Unit
      },
    ]
  }
  
];
