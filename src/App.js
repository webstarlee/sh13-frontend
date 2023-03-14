import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { router } from "routes";
import { theme } from "theme";
import { SHToast } from "components";
import { headerAction } from "store/Header";

function App() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.header.error);

  useEffect(() => {
    if (error) {
      const err = Object.values(error)[0];
      const data = {
        IsOpen: true,
        title: "Error",
        type: "error",
        comment: err 
      };
      dispatch(headerAction.openToast(data));
      dispatch(headerAction.clearError());
    }
  }, [error, dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider
        router={router}
        fallbackElement={
          <div style={{ height: "100vh", width: "100%" }}>asdfasdf</div>
        }
      />
      <SHToast />
    </ThemeProvider>
  );
}

export default App;
