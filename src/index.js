import { createRoot } from "react-dom";
import Layout from "./common/components/layout/Layout";
import './common/styles/index.css';
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);