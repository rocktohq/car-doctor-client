import Navbar from './../Navbar/Navbar';
import { FaFacebook, FaMailBulk, FaPhone, FaTwitter, FaYoutube } from "react-icons/fa";
const Header = () => {
  return (
    <header className="shadow-md max-w-screen-xl mx-auto px-3">
      <div className="hidden md:flex items-center justify-between px-3 pt-3">
        <p className="flex items-center gap-2"><FaPhone className="text-primary" /> +8801711-112233</p>
        <p className="flex items-center gap-2"><FaMailBulk className="text-primary" /> cardoctor@gmail.com</p>
        <div className="flex items-center gap-2"><FaFacebook className="hover:text-primary" /> <FaTwitter className="hover:text-primary" /> <FaYoutube className="hover:text-primary" /></div>
      </div>
      <Navbar></Navbar>
    </header>
  )
}

export default Header
