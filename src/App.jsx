import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Doctor from './pages/Doctor';
import Loginp from './pages/Loginp';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import MyProfile from './pages/MyProfile';
import MyAppoinment from './pages/MyAppoinment';
import Appoinment from './pages/Appoinment';

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctor />} />
        <Route path="/doctors/:speciality" element={<Doctor />} />
        <Route path="/Loginp" element={<Loginp />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/MyProfile" element={<MyProfile />} />
        <Route path="/MyAppoinment" element={<MyAppoinment />} />
        <Route path="/Appoinment/:docId" element={<Appoinment />} />
      </Routes>
    </div>
  );
};

export default App;
