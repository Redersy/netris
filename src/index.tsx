import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./app/store";
import { MainPage } from "./pages";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider
        router={createBrowserRouter([
          {
            path: "/",
            element: <MainPage />
          }
        ])}
      />
    </Provider>
  </React.StrictMode>
);
