import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/client/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminSidebar from './components/admin/Sidebar';
import AddProject from './components/admin/AddProject';
import AddClient from './components/admin/AddClient';
import Contacts from './components/admin/Contacts';
import Subscribers from './components/admin/Subscribers';
import AdminLogin from './components/admin/AdminLogin';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/admin-addProject' element={<AddProject/>}></Route>
          <Route path='/addClient' element={<AddClient/>}></Route>
          <Route path='/viewContacts' element={<Contacts/>}></Route>
          <Route path='/viewSubscribers' element={<Subscribers/>}></Route>
          <Route path='/login' element={<AdminLogin/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
