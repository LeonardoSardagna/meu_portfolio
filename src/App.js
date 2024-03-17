import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import PaginaInicial from "./componentes/pagina-inicial";
import Sobremim from "./componentes/sobremim";
import MenuPrincipal from "./paginaMenu/menu";
import Rodape from "./componentes/rodape";
import PaginaPadrao from "./componentes/paginaPadrao";
import PostCard from "./componentes/postCard";

function App() {
  return (
    <BrowserRouter>
      <MenuPrincipal/>
      <Routes>
        <Route path="/" element={<PaginaPadrao/>}>
          <Route index  element={<PaginaInicial/>}/>
          <Route path="sobremim" element={<Sobremim/>} /> 
          <Route path="posts/:id" element={<PostCard/>} />
        </Route>
      </Routes>
      <Rodape/>
    </BrowserRouter>
  );
}

export default App;
