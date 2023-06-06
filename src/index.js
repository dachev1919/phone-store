import { createRoot } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import './common/styles/index.css';

import Layout from "./common/components/layout/Layout";

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </Provider>
);