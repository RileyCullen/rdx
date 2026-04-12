import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

function Hello() {
  return <p>Hello, world</p>;
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
