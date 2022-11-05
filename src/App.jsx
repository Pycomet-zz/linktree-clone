import { Route, Routes } from 'react-router-dom';
import ContactPage from './pages/contact';
import IndexPage from './pages/index';

function App() {
  return (
    <Routes>
        <Route index element={<IndexPage />} />
        <Route path="contact" element={<ContactPage />}/>
    </Routes>
  );
}

export default App;
