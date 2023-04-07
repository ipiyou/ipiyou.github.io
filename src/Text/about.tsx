import { MyGithub } from "../assets/img";
import { _Text } from "../components/common/Text";

const aboutContent = [
  { name: "# 생년월일", content: "2005.02.27" },
  { name: "# 학교", content: "대덕소프트웨어마이스터고등학교" },
  { name: "# 집", content: "대전 대덕구 신탄진" },
  { name: "# 전화번호", content: "010-7355-9975" },
  { name: "# 이메일", content: "tao710803@gmail.com" },
];

export const about = {
  title: "김태완",
  subTitle: "성장하며 나아갑니다. 코딩을 샌드박스형 게임이라 생각합니다",
  detail:
    "저는 맡은 일은 끝내기 위해 노력하고 성장하는 것을 중요하게 생각합니다. 이러한 저와 가치관이 맞는 회사와 함께하고 싶습니다.",
  img: MyGithub,
  github: "https://github.com/ipiyou",
  content: aboutContent.map(({ name, content }) => (
    <div>
      <_Text>{name}</_Text>
      <_Text size="18px">{content}</_Text>
    </div>
  )),
};
