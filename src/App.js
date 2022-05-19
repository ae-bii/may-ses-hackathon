import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Input from './components/Input';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/input' element={<Input/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
