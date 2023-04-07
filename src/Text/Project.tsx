import { OnPost } from "../assets/img";
import { onPostVideo } from "../assets/videos";
import { ReactNode } from "react";
import { _Text } from "../components/common/Text";

interface TextType {
  children: ReactNode;
}

const onPostContent = [
  { name: "# 인원수", content: "프론트 2명, 백엔드 1명, 안드로이드 1명" },
  { name: "# 기술 스택", content: "React, Typescript, Axios, Recoil" },
  {
    name: "# 역할",
    content:
      "프로필 이름,이미지,비밀번호 변경 댓글 추가 삭제 글 이름,내용,이미지추가 수정",
  },
];

export const projects = [
  {
    title: "onPost",
    subTitle: "첫번째 프로젝트",
    detail: "글을 작성해 올려 유저와 댓글로 소통할 수 있는 서비스",
    img: OnPost,
    video: onPostVideo,
    github: "https://github.com/ON-DSM/OnPost_FrontEnd",
    content: onPostContent.map(({ name, content }) => (
      <div>
        <_Text>{name}</_Text>
        <_Text size="18px">{content}</_Text>
      </div>
    )),
  },
];
