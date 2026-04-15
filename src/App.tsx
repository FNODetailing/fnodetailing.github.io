import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ExteriorDetail from "./pages/ExteriorDetail";
import InteriorDetail from "./pages/InteriorDetail";
import FullDetail from "./pages/FullDetail";
import CeramicCoat from "./pages/CeramicCoat";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/exterior-detail" element={<ExteriorDetail />} />
        <Route path="/services/interior-detail" element={<InteriorDetail />} />
        <Route path="/services/full-detail" element={<FullDetail />} />
        <Route path="/services/ceramic-coat" element={<CeramicCoat />} />
        <Route path="*" element={<Home />} />
      </Routes></>
  );
}