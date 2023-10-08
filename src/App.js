import "./App.scss";
import Home from "./components/Home";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Appointments from "./components/Appoinments";
import { useLocation } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
const Animated = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location}>
        <Route index element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/FAQS" element={<FAQ />} />
        <Route path="/Appointment" element={<Appointments />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <>
      {
        <BrowserRouter>
          <Animated></Animated>
        </BrowserRouter>
      }
    </>
  );
}

export default App;
