import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "scenes/dashboard";
import Layout from "scenes/layout";
import { themeSettings } from "theme";

function App() {

  // In here the global is the variable defined in the store.
  // In useSelector, it passes state as parameter, so it pass every reducers inside the 
  // store. So we have to grab what we really need, in here it is global.
  // Then we have to get value from that like mode.
  const mode = useSelector((state) => state.global.mode);

  // This useMemo used to memoize the computations values by caching them.
  // It needs two arguments, first one is the calculation, second one is
  // the dependency array which contains the variables, if this one variable changes on the
  // next iteration of the code then this calculation will run, Otherwise it not run.
  // Then it return value as first cached value. 
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
