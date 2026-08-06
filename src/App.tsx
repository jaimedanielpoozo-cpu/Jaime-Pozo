import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NextPartsLanding from './pages/NextPartsLanding';
import NextPartsPrivacy from './pages/NextPartsPrivacy';
import NextPartsLegal from './pages/NextPartsLegal';
import JackPortfolio from './pages/JackPortfolio';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NextPartsLanding />} />
        <Route path="/politica-de-privacidad" element={<NextPartsPrivacy />} />
        <Route path="/aviso-legal" element={<NextPartsLegal />} />
        <Route path="/jack" element={<JackPortfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
