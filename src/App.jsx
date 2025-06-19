import './App.css'
import Nav from './Navbar'
import Sign from './Sign'
import Login from './Login'
import Pass from './ForgotPass'
import { Route, Routes } from 'react-router-dom'
import Landing from './Landing'
import Product from './Product'
import Seller from './Seller'

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/product' element={<Product />} />
        <Route path='/seller' element={<Seller />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign' element={<Sign />} />
        {/* <Route path='/signup' element={<Register />} /> */}
      </Routes>
    </>
  )
}

export default App
