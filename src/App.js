import "./App.scss";
import Home from "./components/Home";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Appointments from "./components/Appoinments";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/FAQS" element={<FAQ />} />
        <Route path="/Appointment" element={<Appointments />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
