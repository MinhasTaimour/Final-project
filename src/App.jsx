import './App.css'
import Header from './Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page from './page';
import { Container } from 'react-bootstrap';
import Login from './login';
import Register from './register';
import PageConstruct from './pageConstruct';
import Productlist from './Productlist';
import Addproduct from './Addproduct';
import ProductScreen from './productScreen'

function App() {
  return (
  <Router>
    <Header/>
          <Routes>
              <Route path='/' element={<Page/>} exact />
              <Route path='/page/:pageNumber' element={<Page/>} />
              <Route path='/PageConstructor' element={<PageConstruct/>} exact />
              <Route path='/login' element={<Login/>} />
              <Route path='/register' element={<Register/>} />
              <Route path='/Productlist' element={<Productlist/>} />
              <Route path='/Addproduct' element={<Addproduct/>} />
              <Route path='/product/:id' element={<ProductScreen/>} />
            </Routes>

		</Router>

  )
}

export default App
