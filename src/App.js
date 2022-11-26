import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import User from './pages/User';
import { UserStorage } from './Contexts/UserContext'
import ProtectedRouter from './components/Helper/ProtectedRouter';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='login/*' element={<Login/>}/>
              <Route path='conta/*' element={
                <ProtectedRouter>
                  <User/>
                </ProtectedRouter>
              }/>
            </Routes>
          <Footer/>
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
