import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navigation from './components/Navbar';
import Home from './components/Home';
import Posts from './components/posts';
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/posts' element={<Posts/>}/> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
