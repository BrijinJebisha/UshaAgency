import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Cycles from './pages/Cycles';
import SewingMachines from './pages/SewingMachines';
import StitchingMaterials from './pages/StitchingMaterials';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cycles" element={<Cycles />} />
          <Route path="/sewing-machines" element={<SewingMachines />} />
          <Route path="/stitching-materials" element={<StitchingMaterials />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
