import './App.css';
import {useState} from 'react'
import Login from './pages/login'
import HomePage from './pages/homepage'

function App() {
  const [token, setToken] = useState(false)

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
      <HomePage />
  );
}

export default App;
