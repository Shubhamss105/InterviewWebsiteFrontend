import { useState } from 'react';
import {BrowserRouter,Routes,Route,Outlet,Navigate} from 'react-router-dom'
import './App.css';
import Login from './components/login/Login';
import Navbar from './components/navbar/Navbar';
import Signup from './components/signup/Signup';
import Contribution from './pages/Contribution';
import Home from './pages/Home';
import DataProvider from './context/DataProvider';
import InterviewData from './pages/InterviewData';
import Footer from './components/footer/Footer';


const PrivateRoute = ({ isAuthenticated, ...props }) => {
  return isAuthenticated ? 
    <>
      <Outlet />
    </> : <Navigate replace to='/login' />
};

function App() {
  const [isAuthenticated, isUserAuthenticated] = useState(false);
  return (
    <DataProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='signup' element={<Signup/>}/>
          <Route path='login' element={<Login isUserAuthenticated={isUserAuthenticated}/>}/>
           
          <Route path='/' element={<Home/>}/> 
          <Route path='/contribute' element={<Contribution/>}/>
          <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
          <Route path='/details' element={<InterviewData/>}/>
              
            </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
