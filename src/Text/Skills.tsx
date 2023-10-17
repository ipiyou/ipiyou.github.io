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

export const skillHoverText = (
  <>
    <div>
      25%까지는 디버깅에 <b>약간 힘듭니다</b>
    </div>
    <div>
      50%까지는 사용하는데 <b>어려움이 없습니다.</b>
    </div>
    <div>
      75%까지는 <b>작동 원리를 공부</b>합니다
    </div>
  </>
);
export const skillNotHoverText =
  "안녕하세요. 자세한 숙련도를 보려면 프로필을 호버해 주세요";

export const skillList = [
  { degree: 0, icon: <Typescript />, percent: "50%", radius: "4px" },
  { degree: 45, icon: <Styled />, percent: "45%", radius: "20px" },
  { degree: 90, icon: <Github />, percent: "50%", radius: "100%" },
  { degree: 135, icon: <React />, percent: "60%", radius: "19px" },
  { degree: 180, icon: <Javascript />, percent: "70%", radius: "0" },
  { degree: 225, icon: <Redux />, percent: "35%", radius: "20px" },
  { degree: 270, icon: <NextJs />, percent: "55%", radius: "100%" },
  { degree: 315, icon: <Recoil />, percent: "40%", radius: "8px" },
];
