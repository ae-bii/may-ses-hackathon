import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Login from './components/login/Login';
import Input from './components/input/Input'
/* import Header from './components/header/Header'; */
import Budgeting from './components/budgeting/Budgeting';
import Spending from './components/spending/Spending';
import Investing from './components/investing/Investing';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Header/> */}
        <Routes>
          <Route path='/' exact element={<Login/>}></Route>
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
