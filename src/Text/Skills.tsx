import {
  Github,
  Javascript,
  NextJs,
  React,
  Recoil,
  Redux,
  Styled,
  Typescript,
} from "../assets/svg";

export const skillHoverText =
  "0부터 25%까지는 디버깅에 어려움을 겪습니다. 50%까지는 사용하는 데 많은 어려움이 없습니다. 75%까지는 작동 원리를 배웁니다";
export const skillNotHoverText =
  "안녕하세요. 자세한 숙련도를 보려면 프로필을 호버해 주세요";

export const skillList = [
  { degree: 0, icon: <Typescript />, percent: "50%", radius: "4px" },
  { degree: 45, icon: <Styled />, percent: "45%", radius: "20px" },
  { degree: 90, icon: <Github />, percent: "50%", radius: "100%" },
  { degree: 135, icon: <React />, percent: "60%", radius: "19px" },
  { degree: 180, icon: <Javascript />, percent: "70%", radius: "0" },
  { degree: 225, icon: <Redux />, percent: "35%", radius: "20px" },
  { degree: 270, icon: <NextJs />, percent: "25%", radius: "100%" },
  { degree: 315, icon: <Recoil />, percent: "45%", radius: "8px" },
];
