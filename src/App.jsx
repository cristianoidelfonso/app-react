import logo from './logo.svg'
import './App.css'
import Global from "./styles/global";
import Login from './pages/Login/Login';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a href="/">MyPharma</a>
      </header>
      <Global />
      <Login bgColor='#ccc'/>
    </div>
  )
}

export default App
