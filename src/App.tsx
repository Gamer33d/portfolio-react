import { AcademicBackground } from "./pages/AcademicBackground";
import { Home } from "./pages/Home";
import MyProjects from "./pages/MyProjects";
import { Tecnologies } from "./pages/Tecnologies";
import './styles/global.scss'

function App() {
  return (
    <div className="app">
      <Home />
      <Tecnologies /> 
      <AcademicBackground />
      <MyProjects />
    </div>
  );
}

export default App;
