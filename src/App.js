import './App.css'
import Category from './Pages/Category';
import Film from './Pages/Film';
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';
import Search from './Pages/Search';
import Actor from './Pages/Actor';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';


function App() {
  return (

    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/film" element={<Film />} />
        <Route path="/category" element={<Category />} />
        <Route path="/actor" element={<Actor />} />
      </Routes>
    </Router>

  );
}

export default App;
