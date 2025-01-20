import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/layout/Layout';
import SignUp from './pages/sign up/SignUp';
import SignIn from './pages/sign in/SignIn';

function App() {
  return (
    <BrowserRouter basename="/morent">
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="SignIn" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
