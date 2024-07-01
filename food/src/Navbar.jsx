import React,{useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import icon from './favicon.ico';



function Navbar() {
  const location =useNavigate();
  const [productvalue,setProductValue]=useState('');
  const handleProduct=(e)=>{
if(e.key==='Enter'){
  setProductValue(e.target.value);
  location(`/findProduct/${e.target.value}`);
}
  }
  return (
    <div className="bg-navbar p-3">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
      <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
  <img src={icon} width="40" height="32" alt="Favicon" />
</a>
        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><Link to="/" className="nav-link px-2 text-white headstyle active" >IndoFlavaours</Link></li>
          <li><Link to="/" className="nav-link px-2 text-white headstyle" >Home</Link></li>
          <li><Link to="/products" className="nav-link px-2 text-white headstyle">Products</Link></li>
         
          <li><Link to="/about" className="nav-link px-2 text-white headstyle">About</Link></li>
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" value={productvalue} onChange={(e) => setProductValue(e.target.value)} onKeyDown={(e)=>{handleProduct(e)}} className="form-control form-control-dark text-bg-light" placeholder="Search..." aria-label="Search" />
        </form>

        <div className="text-end">
          {/* <button type="button" className="btn btn-outline-light me-2">Login</button>
          <button type="button" className="btn btn-outline-light me-2">SignUp</button>
     */}
          {/* <button type="button" className="btn btn-warning">Sign-up</button> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
