
function Resume() {
  return (
    <main className="p-4 w-11/12 max-w-screen-xl m-auto">
      <h2 className='font-extrabold text-3xl mb-7'>Resume</h2>
      <div className="border-b border-black md:p-12 mb-6 md:flex justify-between">
        <h3 className="font-bold text-2xl mb-4">Work Experience</h3>
        <div className="flex flex-col max-w-lg">
        <div className="md:flex gap-4">
          <span className="font-light text-lg basis-auto flex-grow shrink-0">2022 - Present</span>
          <div>
            <h4 className="font-bold text-lg mb-3">Developer at Microsoft</h4>
            <p  className="font-light text-lg leading-normal tracking-wider mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo alias voluptatibus, expedita soluta totam libero omnis. Rerum sit ea consectetur quam itaque corporis laboriosam eum optio, aliquid quas numquam. Qui.</p>
          </div>
        </div>
        
        <div className="md:flex gap-4">
          <span className="font-light text-lg basis-auto flex-grow shrink-0">2022 - Present</span>
        <div>
          <h4 className="font-bold text-lg mb-3">Freelancer</h4>
          <p className="font-light text-lg leading-normal tracking-wider mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo alias voluptatibus, expedita soluta totam libero omnis. Rerum sit ea consectetur quam itaque corporis laboriosam eum optio, aliquid quas numquam. Qui.</p>
        </div>
        </div>

        <div className="md:flex gap-4">
          <span className="font-light text-lg basis-auto flex-grow shrink-0">2022 - Present</span>
        <div>
          <h4 className="font-bold text-lg mb-3">Intern</h4>
          <p className="font-light text-lg leading-normal tracking-wider mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo alias voluptatibus, expedita soluta totam libero omnis. Rerum sit ea consectetur quam itaque corporis laboriosam eum optio, aliquid quas numquam. Qui.</p>
        </div>
        </div>

        </div>
      </div>


      <div className="border-b border-black mb-6 md:flex justify-between">
        <h3 className="font-bold text-2xl mb-4">Education</h3>
        <div className="flex flex-col max-w-lg">
          <div className="md:flex gap-4">
            <span className="font-light text-lg shrink-0">2027 - 2030</span>
            <div>
            <h4 className="font-bold text-lg mb-3">Harvard University | Master&apos;s Degree</h4>
            <p  className="font-light text-lg leading-normal tracking-wider mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo alias voluptatibus, expedita soluta totam libero omnis. Rerum sit ea consectetur quam itaque corporis laboriosam eum optio, aliquid quas numquam. Qui.</p>
            </div>
          </div>

          <div className="md:flex gap-4">
            <span className="font-light text-lg shrink-0">2035 - 2038</span>
            <div>
            <h4 className="font-bold text-lg mb-3">Oxford University | Bachelor&apos;s Degree</h4>
            <p className="font-light text-lg leading-normal tracking-wider mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo alias voluptatibus, expedita soluta totam libero omnis. Rerum sit ea consectetur quam itaque corporis laboriosam eum optio, aliquid quas numquam. Qui.</p>
            </div>
          </div>
        </div>
      </div>


      <div className="md:flex justify-between">
        <h3 className="font-bold text-2xl mb-4">Skills &amp; Expertise</h3>
        <ul className="font-light text-lg leading-normal tracking-wider mb-5 list-disc ml-5 max-w-sm">
          <li className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, facere.</li>
          <li className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, facere.</li>
          <li className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, facere.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, facere.</li>
        </ul>
        </div>
    </main>
  )
}

export default Resume