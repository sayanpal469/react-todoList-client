import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/' element={ <Home/>}></Route>
        <Route path='login' element={ <Login/>}></Route>
        <Route path='signup' element={ <SignUp/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
