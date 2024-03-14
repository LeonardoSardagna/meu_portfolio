import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import PaginaInicial from "./componentes/pagina-inicial";
import Sobremim from "./componentes/sobremim";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/"  element={<PaginaInicial/>}/>
          <Route path="/sobremim" element={<Sobremim/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
