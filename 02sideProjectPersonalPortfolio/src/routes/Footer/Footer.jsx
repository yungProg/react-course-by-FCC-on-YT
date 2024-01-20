import {Link} from "react-router-dom"

function Footer() {
  return (
    <footer className="flex md:flex-row md:justify-around md:px-24 flex-col gap-5 p-7 border-t-2 border-black">
      <div>
        <h3>Phone</h3>
        <Link to="tel:+233243230749">+233-24-323-0749</Link>
      </div>
      <div>
        <h3>Email</h3>
        <Link to="mailto:gboakye007@outlook.com">gboakye007@outlook.com</Link>
      </div>
      <div>
        <h3>Follow Me</h3>
        <div>
        <i className='bx bxl-linkedin'></i>
        <i className='bx bxl-twitter' ></i>
        </div>
      </div>
      <div>
        <span>&copy; {new Date().getFullYear()} By Gideon Boakye</span>
      </div>
    </footer>
  )
}

export default Footer