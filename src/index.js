import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";

import "./index.scss";
import App from "./App";
import { UserProvider } from "./contexts/user.context";
import { CategoriesProvider } from "./contexts/categories.context";
import { CartProvider } from "./contexts/cart.context";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <StrictMode>
      <UserProvider>
        <CategoriesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider>
      </UserProvider>
    </StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
