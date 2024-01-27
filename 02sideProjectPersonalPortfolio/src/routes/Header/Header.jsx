import { NavLink } from "react-router-dom"
import { useState } from "react"
import "../../App.css"

function Header() {
  const [myClass, setMyClass] = useState("hidden")

  return (
    <div>
      <header>
        <nav className="flex py-4 px-2 gap-1 ">
          <div className="w-5 h-5 bg-yellow-500 rounded-full my-auto"></div>
          <h1 className="my-auto pr-4 font-bold text-xl"><NavLink onClick={() => setMyClass("hidden")} to="/">Gideon Boakye</NavLink></h1>
          <p className="my-auto text-sm font-normal"><NavLink onClick={() => setMyClass("hidden")} to="/">Web Developer</NavLink></p>
          <ul id="n" className="my-auto ml-auto mr-2 flex gap-2" >
            <li className="px-4 border-r-2 border-black cursor-pointer"><NavLink to="/resume">Resume</NavLink></li>
            <li className="px-4 border-r-2 border-black cursor-pointer"><NavLink to="/projects">Projects</NavLink></li>
            <li className="px-4 cursor-pointer"><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div onClick={() => setMyClass(myClass == "hidden" ? "block flex flex-col items-center my-20 gap-12" : "hidden")} className="my-auto ml-auto mr-2 cursor-pointer md:hidden"><i className='bx bx-md bx-menu'></i></div>
        </nav>
        <div id="a" className={myClass} style={{height: "100vh", background: "", fontSize:"1.4rem", fontWeight: "bold"}}>
          <div><NavLink onClick={() => setMyClass("hidden")} to="/resume">Resume</NavLink></div>
          <div><NavLink onClick={() => setMyClass("hidden")} to="/projects">Project</NavLink></div>
          <div><NavLink onClick={() => setMyClass("hidden")} to="/contact">Contact</NavLink></div>
        </div>
      </header>
    </div>
  )
}

export default Header