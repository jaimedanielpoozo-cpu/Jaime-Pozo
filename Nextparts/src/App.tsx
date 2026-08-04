import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NextPartsLanding from './pages/NextPartsLanding';
import JackPortfolio from './pages/JackPortfolio';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NextPartsLanding />} />
        <Route path="/jack" element={<JackPortfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
