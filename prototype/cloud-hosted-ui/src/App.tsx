import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Overview } from './pages/Overview';
import { Deploy } from './pages/Deploy';
import { Services } from './pages/Services';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/deploy" element={<Deploy />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
