
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/layout/Layout';
import SignUp from './pages/sign up/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/morent" element={<Layout />} />
        <Route path="/morent/SignUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
