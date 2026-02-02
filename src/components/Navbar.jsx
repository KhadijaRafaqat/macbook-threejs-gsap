import React from 'react'
import logo from '../Assets/logo.svg'
import srch from '../Assets/search.svg'
import cart from '../Assets/cart.svg'
import navLinks from '../constants'

const Navbar = () => {
  return (
   <header>
    <nav>
        <img src={logo} alt="Apple logo" />

        <ul>
          {navLinks.map(({label})=> (
            <li key={label}>
              <a href={label}>{label}</a>
            </li>
          ))}
        </ul>
          <div className='flex-center gap-3'>
            <button>
              <img src={srch} alt="Search" />
            </button>

            <button>
              <img src={cart} alt="Cart" />
            </button>
          </div>


    </nav>
   </header>
  )
}

export default Navbar