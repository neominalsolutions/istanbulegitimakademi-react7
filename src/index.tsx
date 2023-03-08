import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
// React uygulaması redux yapısını kullansın
// redux sadece react için kullanılmaz angular vue gibi spa uygulamalarda redux kullanabilir onlar içinde farklı paketler var. Redux bu paket sadece react ile uyumlu olması için kullanılan paket
import { store } from "./store/store";

import "bootstrap/dist/css/bootstrap.min.css";
// global olarak uygulama genelinde bootstrap stilleri tanıttık

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* uygulama genelinde redux kullanıcak isek tüm componentleri Provider component ile sarmalarız */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
