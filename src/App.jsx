import './App.css';
import { Routes, Route } from 'react-router-dom';
import Global from "./styles/global";
import Header from './components/Header';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import NotFound from './pages/NotFound';

function App() {

  return (
    <div className="App">
      <Header />
      <Global />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
