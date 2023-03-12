import React from "react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { router } from "routes";
import { theme } from "theme";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme} >
        <RouterProvider router={router}/>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
