import { ToastContainer } from "react-toastify";
import "./App.css";
import router from "./routers";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer theme="colored"/> 
    </>
  );
}

export default App;
