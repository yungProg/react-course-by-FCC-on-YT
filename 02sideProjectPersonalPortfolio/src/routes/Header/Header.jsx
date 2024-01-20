import { NavLink } from "react-router-dom"

function Header() {
  const b = document.getElementById("a")

  return (
    <div>
      <header>
        <nav className="flex p-4 gap-2 ">
          <div className="w-5 h-5 bg-yellow-500 rounded-full my-auto"></div>
          <h1 className="my-auto font-bold text-xl">Gideon Boakye</h1>
          <p className="my-auto text-sm font-normal">Web Developer</p>
          <div onClick={() => {b.className === "hidden" ? b.className = "block" : b.className = "hidden"}} className="my-auto ml-auto mr-2"><i className='bx bx-md bx-menu'></i></div>
        </nav>
        <div id="a" className="hidden">
          <div><NavLink to="/resume">Resume</NavLink></div>
          <div><NavLink to="/projects">Project</NavLink></div>
          <div><NavLink to="/contact">Contact</NavLink></div>
        </div>
      </header>
    </div>
  )
}

export default Header