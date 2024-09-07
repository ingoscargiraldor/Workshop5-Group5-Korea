import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import KoreaImporter from './pages/KoreaImporter';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Korea Importadora</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<KoreaImporter />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
