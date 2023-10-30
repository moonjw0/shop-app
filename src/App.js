import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav/Nav';
import HomePage from './pages/HomePage/index';
import LoginPage from './pages/LoginPage/index';
import RegisterPage from './pages/RegisterPage';

const Layout = () => {
  return (
    <div>
      <Nav />

      {/* <Outlet />

      <Footer /> */}
    </div>
  )
}
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Layout />}/>
        <Route index element={<HomePage />}/>
        <Route path='login' element={<LoginPage />}/>
        <Route path='register' element={<RegisterPage />}/>
      </Routes>
      <Nav />
    </div>
  );
}

export default App;
