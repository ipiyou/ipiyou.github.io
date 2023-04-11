import styled from "styled-components";
import { Finish } from "./sections/Finish";
import { Lending } from "./sections/Lending";
import { ProjectTimeLine } from "./sections/ProjectTimeLine";
import { SkillChart } from "./sections/SkillChart";
import { GlobalProvider } from "./style/Provider";
import { useEffect, useState, Dispatch, SetStateAction } from "react";
import { Header } from "./components/common/Header";
import { Footer } from "./components/common/Footer";

export type ScrollFnType = Dispatch<SetStateAction<number>>;

export interface ScrollType {
  setScroll: ScrollFnType;
  scroll?: number;
}

function App() {
  const [scroll, setScroll] = useState<number>(0);
  return (
    <GlobalProvider>
      <Header setScroll={setScroll} scroll={scroll} />
      <_Wrapper scroll={scroll}>
        <Lending setScroll={setScroll} />
        <SkillChart setScroll={setScroll} />
        <ProjectTimeLine setScroll={setScroll} />
        <Finish setScroll={setScroll} />
      </_Wrapper>
      <Footer scroll={scroll} />
    </GlobalProvider>
  );
}

const _Wrapper = styled.div<{ scroll: number }>`
  width: 100%;
  position: fixed;
  transition: 0.25s;
  left: 0;
  top: ${({ scroll }) => scroll * -100}vh;
`;

export default App;
