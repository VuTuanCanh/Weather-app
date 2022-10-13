import { Route, Routes } from 'react-router-dom';
import './App.css';
import Weather from './components/Weather';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Weather />}></Route>
      </Routes>
    </div>
  );
}

export default App;
