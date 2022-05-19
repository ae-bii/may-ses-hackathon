import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Input from './components/Input';
import Header from './components/Header';
import './App.css';
import Investing from './components/Investing';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/input' element={<Input/>}></Route>
          <Route path='/investing' element={<Investing/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
