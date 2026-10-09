import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta principal */}
        <Route path="/" element={<Home />} />
        
        {/* Tu segunda página */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;