import './App.css';
import './index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Componentes/Navbar';
import Login from './Componentes/Login';


function App(){

return(
    <>
    <Router>
    <Navbar/>
    <Routes>
    <Route path= '/' exact/>
    </Routes>
    </Router>
    <Login/>
    </>
    );
    }

export default App;