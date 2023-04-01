import { Finish } from "./sections/Finish";
import { Lending } from "./sections/Lending";
import { ProjectTimeLine } from "./sections/ProjectTimeLine";
import { SkillChart } from "./sections/SkillChart";
import { GlobalProvider } from "./style/Provider";

function App() {
  return (
    <GlobalProvider>
      <Lending />
      <SkillChart />
      <ProjectTimeLine />
      <Finish />
    </GlobalProvider>
  );
}

export default App;
