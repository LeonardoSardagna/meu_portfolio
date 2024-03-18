import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import PaginaInicial from "./componentes/pagina-inicial";
import MenuPrincipal from "./paginaMenu/menu";
import Rodape from "./componentes/rodape";
import PaginaPadrao from "./componentes/paginaPadrao";
import PostCard from "./componentes/postCard";
import PagNaoEncontrada from "./paginas/paginanaoEncontrada";

function App() {
  return (
    <BrowserRouter>
      <MenuPrincipal/>
      <Routes>
        <Route path="/" element={<PaginaPadrao/>}>
          <Route index  element={<PaginaInicial/>}/>
        </Route>
        <Route path="posts/:id/*" element={<PostCard/>} />
        <Route path="*" element={<PagNaoEncontrada/>} />
      </Routes>
      <Rodape/>
    </BrowserRouter>
  );
}

export default App;
