import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';

import { Route,Routes , BrowserRouter as Router } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Collections from './pages/Collections';
import User from './pages/User';
import Nec from './pages/Nec';
import StarsCanvas from './components/canvas/Stars';
import CreateOrganisation from './pages/createOrganisation';


function App() {
  return (
    <div className="App ">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/collections' element={<Collections/>}/>
          <Route path='/user' element={<User/>}/>
          <Route path='/nec' element={<Nec/>}/>
          <Route path='/browse' element={<Nec/>}/>
          <Route path='/collections' element={<Collections/>}/>
          <Route path='/createorganisation' element={<CreateOrganisation/>}/>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
