import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Signup from './components/Signup';
import Header from './components/header/Header';
import Budgeting from './components/budgeting/Budgeting';
import Spending from './components/spending/Spending';
import Investing from './components/Investing/Investing';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/budgeting' element={<Budgeting/>}></Route>
          <Route path='/spending' element={<Spending/>}></Route>
          <Route path='/investing' element={<Investing/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
