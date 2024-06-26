import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import Nav from "./component/Nav.jsx";
import Container from "./component/Container.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <Container>
      <Nav/>
      <App />
      </Container>
    </Provider>
  </BrowserRouter>
);
