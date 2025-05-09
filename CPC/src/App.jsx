import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import IdealGasLaw from './IdealGasLaw.jsx';
import ReactorDesign from './ReactorDesign.jsx';
import HeatExchangerCalc from './HeatExchangerCalc.jsx';
import MassAndEnergy from './MassAndEnergy.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Welcome to CPC</h1>} />
        <Route path="/ideal-gas-calc" element={<IdealGasLaw />} />
        <Route path="/reactor-design" element={<ReactorDesign />} />
        <Route path="/heat-exchanger-calc" element={<HeatExchangerCalc />} />
        <Route path="/mass-energy-balance" element={<MassAndEnergy />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
