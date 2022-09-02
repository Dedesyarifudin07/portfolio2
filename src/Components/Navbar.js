import React from 'react';
import  persib from '../img/Persib.png';
import  {Link} from 'react-router-dom';

const Navbar = () => {
  return (

    <nav class="navbar navbar-expand-lg navbar-dark ">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img className="rounded" width="30" src={persib}/>
          </a>
          <a class="navbar-brand" href="#">
          Persib BANDUNG
          </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav  ms-auto">
            <li className='nav-item'>
              <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>

            </li>
            <li class="nav-item">
            <a class="nav-link" href='/'>home</a>
            
            </li>
            <li class="nav-item">
            <a class="nav-link" href='/Blog' >Blog</a>
            
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
