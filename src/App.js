import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PaginaInicial from "./componentes/pagina-inicial";
import PaginaPadrao from "./componentes/paginaPadrao";
import PostCard from "./componentes/postCard";
import ScrollToTop from "./componentes/scrollToTop";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <PaginaPadrao />
      </>
    ),
    children: [
      {
        path: '/',
        element: <PaginaInicial />
      }
    ]
  },
  {
    path: "posts/:id/*",
    element: (
      <>
        <ScrollToTop />
        <PostCard />
      </>
    ),
  },
]);

export function App() {
  return <RouterProvider router={router} />
}
