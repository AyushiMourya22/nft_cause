import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';

import { Route,Routes , BrowserRouter as Router } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Collections from './pages/Collections';
import User from './pages/User';
import CreateOrganisation from './pages/createOrganisation';
import { UserContextProvider } from './Usercontext';
import Browseorg from './pages/Browseorg';

function App() {
  return (
    <div className="App ">
      <Router>
        <UserContextProvider>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/collections' element={<Collections/>}/>
          <Route path='/user' element={<User/>}/>
          <Route path='/collections' element={<Collections/>}/>
          <Route path='/browse' element={<Browseorg/>}/>
          <Route path='/add' element={<CreateOrganisation/>}/>
          
        </Routes>
        </UserContextProvider>
      </Router>
    </div>
  );
}

export default App;
