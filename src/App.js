import React from "react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { router } from "routes";
import { theme } from "theme";
import store from "./store";
import Toast from "components/SHToast";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme} >
        <RouterProvider router={router} fallbackElement={<div style={{height: "100vh", width: "100%"}}>asdfasdf</div>}/>
        <Toast />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
