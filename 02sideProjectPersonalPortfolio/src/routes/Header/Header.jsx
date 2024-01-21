import { NavLink } from "react-router-dom"
import { useState } from "react"

function Header() {
  const [myClass, setMyClass] = useState("hidden")

  return (
    <div>
      <header>
        <nav className="flex p-4 gap-2 ">
          <div className="w-5 h-5 bg-yellow-500 rounded-full my-auto"></div>
          <h1 className="my-auto font-bold text-xl"><NavLink onClick={() => setMyClass("hidden")} to="/">Gideon Boakye</NavLink></h1>
          <p className="my-auto text-sm font-normal"><NavLink onClick={() => setMyClass("hidden")} to="/">Web Developer</NavLink></p>
          <div onClick={() => setMyClass(myClass == "hidden" ? "block flex flex-col items-center justify-center gap-12" : "hidden")} className="my-auto ml-auto mr-2"><i className='bx bx-md bx-menu'></i></div>
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