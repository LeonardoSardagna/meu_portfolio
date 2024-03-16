import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import PaginaInicial from "./componentes/pagina-inicial";
import Sobremim from "./componentes/sobremim";
import MenuPrincipal from "./paginaMenu/menu";
import Rodape from "./componentes/rodape";

function App() {
  return (
    <BrowserRouter>
      <MenuPrincipal/>
      <Routes>
          <Route path="/"  element={<PaginaInicial/>}/>
          <Route path="/sobremim" element={<Sobremim/>} />
      </Routes>
      <Rodape/>
    </BrowserRouter>
  );
}

export default App;
