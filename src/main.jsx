import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./ui/Home/Home.jsx";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import todoSlice from "./states/todoSlice.js";

const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  </Provider>
);
