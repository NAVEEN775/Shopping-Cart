import React from 'react'
import '../Registration/Header.css'
import { NavLink } from 'react-router-dom';
function Header({cart}){
    return (
      <div className="header" >
      <span className='logo' >Shopping Cart </span>
      <div className="header-list">
          <ul>
              <li><p >{cart.length>0 &&  <NavLink to='/list'><i class="fas fa-cart-plus"/>{ cart.length }</NavLink>}</p></li>
              <li><p> <NavLink to='/Login'><i class="fa fa-sign-out" aria-hidden="true"/></NavLink></p></li>
         </ul>
      </div>
  </div>
    )
}
export default Header;