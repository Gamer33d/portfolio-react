import { useEffect } from "react";
import { Home } from "./pages/Home";
import { Tecnologies } from "./pages/Tecnologies";
import './styles/global.scss'

function App() {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = '';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <>
      <Home />
      <div className="page-separator"></div>
      <Tecnologies /> 
    </>
  );
}

export default App;
