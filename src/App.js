import "./App.css";
import {React, useState} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";
import Sidebar from "./components/Sidebar";
// import AllGroups from "./components/AllGroups";
import Orders from "./components/Orders";
import Employees from "./components/Employees";
import Customers from "./components/Customers";
import Line from "./components/Line";
import Group from "./components/Group";

function App() {

  const [sideBar, setSideBar] = useState(false);

  return (
    <>
      <section className="dahboardMain">
        <BrowserRouter>

          <div className="sidebar" style={{left: sideBar ? '-20%': 0}}>
            <Sidebar sideBar={sideBar} setSideBar={setSideBar} />
          </div>

          <div className="fulBodyPart" style={{marginLeft: sideBar ? '0%': '18%' }}>
            <header className="navbar">
              <Navbar sideBar={sideBar} setSideBar={setSideBar}/>
            </header>

            <div className="bodyPart">
            <section className="drpSec">
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/all-groups" element={<MainPage />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/line" element={<Line />} />
                <Route path="/group" element={<Group />} />
              </Routes>
              </section>
            </div>
            
          </div>
        </BrowserRouter>
      </section>
    </>
  );
}

export default App;
