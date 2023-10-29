import CarIcon from "/car-doctor.png";

const Footer = () => {
  return (
    <footer className="py-10 bg-base-200 text-base-content">
      <div className="footer max-w-screen-xl mx-auto px-3">
        <aside>
          <img className="h-12 w-12 mx-auto" src={CarIcon} alt="" />
          <p>&copy; CarDoctor&trade; 2023<br />All right reserved.</p>
        </aside>
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
