import { NavLink } from "react-router-dom"

function Home() {
  return (
    <main className="p-7 md:flex flex-row-reverse gap-8 max-w-5xl mx-auto md:mb-32 md:mt-16">
      <div className="md:my-auto">
        <div>
          <h2 className='font-extrabold text-3xl'>Hello</h2>
          <p className="font-bold text-1xl">A Bit About Me</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos error asperiores unde vero, voluptatibus temporibus eos libero saepe adipisci culpa.</p>
        </div>
        <div className="flex justify-center gap-1 my-6 ">
          <NavLink to="/resume" className="rounded-full flex w-36 aspect-square md:h-36 justify-center items-center bg-yellow-500 hover:bg-slate-300 border border-black"><div><button className="text-xl font-bold">Resume</button></div></NavLink>
          <NavLink to="/projects" className="rounded-full flex w-36 aspect-square md:h-36 justify-center items-center bg-red-500 hover:bg-slate-300 border border-black"><div ><button className="text-xl font-bold">Projects</button></div></NavLink>
          <NavLink to="/contact" className="rounded-full flex w-36 aspect-square md:h-36 justify-center items-center bg-teal-500 hover:bg-slate-300 border border-black"><div className="rounded-full py-10"><button className="text-xl font-bold">Contact</button></div></NavLink>
        </div>
      </div>
        <div className="mx-auto max-w-80">
          <img src="20221102_091839_VOK_7143.JPG" alt="Profile Photo" className="rounded-full block mx-auto" />
        </div>
    </main>
  )
}

export default Home