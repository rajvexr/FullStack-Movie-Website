import './App.css'
import Category from './Pages/Category';
import Film from './Pages/Film';
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Actor from './Pages/Actor';

function App() {
  return (

    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/film" element={<Film />} />
        <Route path="/category" element={<Category />} />
        <Route path="/actor" element={<Actor />} />
      </Routes>
    </Router>

  );
}

export default App;
