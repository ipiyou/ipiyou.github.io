import styled from "styled-components";
import { Finish } from "./sections/Finish";
import { Lending } from "./sections/Lending";
import { ProjectTimeLine } from "./sections/ProjectTimeLine";
import { SkillChart } from "./sections/SkillChart";
import { GlobalProvider } from "./style/Provider";
import { useState, Dispatch, SetStateAction } from "react";
import { Header } from "./components/common/Header";
import { Footer } from "./components/common/Footer";
import { useScroll } from "./hooks/useScroll";

export type ScrollFnType = Dispatch<SetStateAction<number>>;

export interface ScrollType {
  setScroll: ScrollFnType;
  scroll?: number;
}

function App() {
  const [scroll] = useScroll()
  return (
    <GlobalProvider>
      <Header scroll={scroll}/>
      <Lending  />
      <SkillChart  />
      <ProjectTimeLine  />
      <Finish />
      <Footer scroll={scroll} />
    </GlobalProvider>
  );
}

export default App;
