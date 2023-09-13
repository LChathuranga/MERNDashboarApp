import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Admin from "scenes/admin";
import Breakdown from "scenes/breakdown";
import Customers from "scenes/customers";
import Daily from "scenes/daily";
import Dashboard from "scenes/dashboard";
import Geography from "scenes/geography";
import Layout from "scenes/layout";
import Monthly from "scenes/monthly";
import Overview from "scenes/overview";
import Performance from "scenes/performance";
import Products from "scenes/products";
import Login from 'scenes/login';
import Transactions from "scenes/transactions";
import { themeSettings } from "theme";
import UnAuthorized from "scenes/unAuthorized";
import UserProfile from "scenes/userProfile";
import UserRoute from "components/protectRoutes/UserRoute";
import AdminRoute from "components/protectRoutes/AdminRoute";
import SuperAdminRoute from "components/protectRoutes/SuperAdminRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <ToastContainer />
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/unAuthorized" element={<UnAuthorized />} />
            <Route element={<Layout />}>

              <Route element={<UserRoute/>}>
                <Route path="/user-profile" element={<UserProfile />} />
              </Route>

              <Route element={<AdminRoute/>}>
                <Route path="/customers" element={<Customers />} />
                <Route path="/products" element={<Products />} />
                <Route path="/transactions" element={<Transactions />} />
                <Route path="/geography" element={<Geography />} />
              </Route>
              
              <Route element={<SuperAdminRoute/>}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/" element={<Navigate to="/dashboard" replace />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/overview" element={<Overview />} />
                <Route path="/daily" element={<Daily />} />
                <Route path="/monthly" element={<Monthly />} />
                <Route path="/breakdown" element={<Breakdown />} />
                <Route path="/performance" element={<Performance />} />
              </Route>

            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
