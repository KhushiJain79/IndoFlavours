import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css'
import Navbar from './Navbar'
import Home from './Home';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Products from './Products';
import About from './About';
import FindProduct from './FindProduct';
import Footer from './Footer';

function App() {
 

  return (
    <>
    <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/home' element={<Home/>}></Route>
      <Route exact path='/about' element={<About/>}></Route>
      <Route exact path='/products' element={<Products/>}></Route>
      <Route exact path='/findproduct/:query' element={<FindProduct/>}></Route>
    </Routes>
    </BrowserRouter>
  <Footer/>
      
    </>
  )
}

export default App
