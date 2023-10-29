import { Link, NavLink } from "react-router-dom";
import Logo from "/logo.svg";
import { BiCart, BiSearch } from 'react-icons/bi';

const Navbar = () => {

  const navLinks = <>
    <li><NavLink className="hover:text-primary link link-hover" to="/">Home</NavLink></li>
    <li><NavLink className="hover:text-primary link link-hover" to="/about">About</NavLink></li>
    <li><NavLink className="hover:text-primary link link-hover" to="/services">Services</NavLink></li>
    <li><NavLink className="hover:text-primary link link-hover" to="/blog">Blog</NavLink></li>
    <li><NavLink className="hover:text-primary link link-hover" to="/contact">Contact</NavLink></li>
  </>

  return (
    <nav className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-lg uppercase gap-2">
            {navLinks}
          </ul>
        </div>
        <Link to="/">
          <img className="w-16 h-16" src={Logo} alt="Logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-3 text-lg uppercase">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end flex items-center gap-3">
        <Link to="/cart"><BiCart className="text-2xl font-bold hover:text-primary" /></Link>
        <div className="cursor-pointer">
          <BiSearch className="text-2xl font-bold hover:text-primary" />
        </div>
        <Link to="/appointment"><button className="btn btn-outline btn-primary rounded">Appointment</button></Link>
      </div>
    </nav>
  )
}

export default Navbar
