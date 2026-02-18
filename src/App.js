import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './compenet/SignIn';
import SignUp from './compenet/SignUp';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
