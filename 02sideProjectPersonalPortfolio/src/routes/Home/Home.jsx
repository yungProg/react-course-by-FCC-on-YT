
function Home() {
  return (
    <main className="p-7">
      <div>
        <h2 className='font-extrabold text-3xl'>Hello</h2>
        <p className="font-bold text-1xl">A Bit About Me</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos error asperiores unde vero, voluptatibus temporibus eos libero saepe adipisci culpa.</p>
      </div>
      <div className="flex gap-1 my-6">
        <div className="rounded-full py-10 flex grow justify-center items-center bg-yellow-500"><button className="text-xl font-bold">Resume</button></div>
        <div className="rounded-full py-10 flex grow justify-center items-center bg-red-500"><button className="text-xl font-bold">Projects</button></div>
        <div className="rounded-full py-10 flex grow justify-center items-center bg-teal-500"><button className="text-xl font-bold">Contact</button></div>
      </div>
      <div>
        <img src="20221102_091839_VOK_7143.JPG" alt="Profile Photo" className="rounded-full" />
      </div>
    </main>
  )
}

export default Home