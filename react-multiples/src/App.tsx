import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageLayout from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/navbar";
import EmployProfile from "./pages/EmployeeProfile/EmployeeProfile";
const App = () => {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <BrowserRouter basename="react-multiples">
          <PageLayout />
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/contact" Component={Contact} />
            <Route path="/profile" Component={EmployProfile} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};
export default App;
