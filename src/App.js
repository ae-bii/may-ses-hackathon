import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Input from './components/Input';
import Header from './components/Header';
import './App.css';
import Home from './components/Home';
import Budgeting from './components/Budgeting';
import Spending from './components/Spending';
import Investing from './components/Investing/Investing';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/input' element={<Input/>}></Route>
          <Route path='/budgeting' element={<Budgeting/>}></Route>
          <Route path='/spending' element={<Spending/>}></Route>
          <Route path='/investing' element={<Investing/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
