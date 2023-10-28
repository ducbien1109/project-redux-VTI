import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import MuSicDetail from "../pages/detail/MusicDetail";
import AdminAntd from "../admin/AdminAntd";
import path from "./path";
import Lyrics from "../pages/detail/Lyrics";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
     
      
    ],
  },
  {
    path: path.AdminAntd,
    element: <AdminAntd />,
  },
  {
    path: path.muSicDetail,
    element: <MuSicDetail/>,
  },
  {
    path: path.editMusic,
    element: <AdminAntd/>,
  },
  {
    path:path.detailContentMusic,
    element:<Lyrics/>
  }
]);

export default router;
