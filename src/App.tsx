import { lazy, type Component } from "solid-js";
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';
import { Route, Routes } from "@solidjs/router";


////Router name///
const Dahsboard = lazy(() => import("./page/dashboard"))
const Login = lazy(() => import("./auth/login"))
const Navbar = lazy(() => import("./navbar/navbar"))
const History =lazy (() => import("./page/history"))
const Market = lazy (() => import("./page/market")) 




const App: Component = () => {
  return (
    <>
    <Routes>
      <Route path="/"  component={Login}/>
      <Route path="/dashboard" component={Dahsboard} />
      <Route path="/navbar" component={Navbar} />
      <Route path="/history" component={History} />
      <Route path="/market-coin" component={Market} />
    </Routes>
    </>
  );
};

export default App;
