import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Verify from "./Components/Verify/Verify";
import VerifyPic from "./Components/VerifyPic/VerifyPic";
import DeviceVerify from "./Components/DeviceVerify/DeviceVerify";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/verifyPic" element={<VerifyPic />} />
          <Route path="/DeviceVerify" element={<DeviceVerify />}></Route>
          <Route path="/Dashboard" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
