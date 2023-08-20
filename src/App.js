import "./App.scss";
import Home from "./components/Home";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Appointments from "./components/Appoinments";
import { useLocation } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import{useState, useEffect} from 'react';
const Animated = () => {
  const location = useLocation();
  return (
      <AnimatePresence exitBeforeEnter >
      <Routes location={location}>
        <Route index element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/FAQS" element={<FAQ />} />
        <Route path="/Appointment" element={<Appointments />} />
      </Routes>
   
      </AnimatePresence>
  )
}
 
function App() {
  const [isLoading, setLoading] = useState(true);
  function someRequest() { //Simulates a request; makes a "promise" that'll run for 2.5 seconds
    return new Promise(resolve => setTimeout(() => resolve(), 4500));
  }
  useEffect(() => {
    someRequest().then(() => {
      const loaderElement = document.querySelector(".divLoader");
      if (loaderElement) {
        loaderElement.remove();
        setLoading(!isLoading);
      }
    });
  });
  if (isLoading) { //
    return null;
  }
  return (
    <BrowserRouter>
    <Animated></Animated>
    </BrowserRouter>
  );
}

export default App;
