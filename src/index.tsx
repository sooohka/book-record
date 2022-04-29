import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import RecoilProvider from "./provider/Recoil";
import RouterProvider from "./provider/Router";
import StyleProvider from "./provider/Style";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RecoilProvider>
      <StyleProvider>
        <RouterProvider>
          <App />
        </RouterProvider>
      </StyleProvider>
    </RecoilProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
