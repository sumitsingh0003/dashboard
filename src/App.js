import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";
import Sidebar from "./components/Sidebar";
import AllGroups from "./components/AllGroups";
import Orders from "./components/Orders";
import Employees from "./components/Employees";
import Customers from "./components/Customers";
import Line from "./components/Line";

function App() {
  return (
    <>
      <section className="dahboardMain">
        <BrowserRouter>
          <div className="sidebar">
            <Sidebar />
          </div>

          <div className="fulBodyPart">
            <header className="navbar">
              <Navbar />
            </header>

            <div className="bodyPart">
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/all-groups" element={<AllGroups />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/line" element={<Line />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </section>
    </>
  );
}

export default App;
