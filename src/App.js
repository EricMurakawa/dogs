import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import User from './pages/User';
import Photo from './components/Photo';
import { UserStorage } from './Contexts/UserContext'
import ProtectedRouter from './components/Helper/ProtectedRouter';
import UserProfile from './pages/User/UserProfile';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header/>
            <main className='AppBody'>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='login/*' element={<Login/>}/>
                <Route path='conta/*' element={
                  <ProtectedRouter>
                    <User/>
                  </ProtectedRouter>
                }/>
                <Route path='foto/:id' element={<Photo/>}/>
                <Route path='perfil/:user' element={<UserProfile/>}/>
                <Route path='*' element={<NotFound/>}/>
              </Routes>
            </main>
          <Footer/>
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
