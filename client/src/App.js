import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Customers from "scenes/customers";
import Dashboard from "scenes/dashboard";
import Geography from "scenes/geography";
import Layout from "scenes/layout";
import Products from "scenes/products";
import Transactions from "scenes/transactions";
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
              <Route path="/products" element={<Products />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/geography" element={<Geography />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
