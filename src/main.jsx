import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import SidebarProvider from "./Context/SidebarContext.jsx";
import DataProvider from "./Context/DataContext.jsx";
import { createTheme, MantineProvider } from "@mantine/core";
const theme = createTheme({
  /** Put your mantine theme override here */
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <SidebarProvider>
    <DataProvider>
      <BrowserRouter>
        <MantineProvider theme={theme}>
          <App />
        </MantineProvider>
      </BrowserRouter>
    </DataProvider>
  </SidebarProvider>
);
