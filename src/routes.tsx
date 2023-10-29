import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';

export function RoutesApp() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
