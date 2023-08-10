
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Login from './Pages/Login';
import About from './Pages/About';
import Contact from './Pages/Contact';
import HomePage from './Pages/homepage';


function App() {
  return (
    <Routes>
      <Route path ="/" element ={<HomePage></HomePage>}></Route>
      <Route path ="/login" element ={<Login></Login>}></Route>
      <Route path ="/About" element = {<About></About>}></Route>
      <Route path ="/Contact" element = {<Contact></Contact>}></Route>
    </Routes>
  );
}


export default App;
