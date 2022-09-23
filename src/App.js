// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./component/Home/Home";
import Form from "./component/Register/register";
import Loginf from "./component/Login Page/login";
import Dashboard from "./component/dashboard/Dashboard";
import Header from "./component/Header/header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Register, reset } from "./features/auth/authSlice";
function App() {
  return (
    // <div className="App">
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route />
          <Route index element={<Home />} />
          <Route path="/register" element={<Form />} />
          <Route path="/login" element={<Loginf />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
    // </div>
  );
}

export default App;
