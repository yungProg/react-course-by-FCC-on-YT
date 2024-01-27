import { Link } from "react-router-dom"

function Contact() {
  return (
    <main className="p-4 mx-auto md:flex justify-around md:mb-40 md:mt-28">
      <div>
        <div>
          <h2 className="font-extrabold text-3xl mb-5">Contact</h2>
          <p className="mb-3">Looking to hearing from you</p>
        </div>
        <div className="mb-2">
          <p className="font-bold text-1xl">Phone</p>
          <Link to={"tel:+233243230749"} aria-label="0243230749">+233-24-323-0749</Link>
        </div>
        <div className="mb-2">
          <p className="font-bold text-1xl">Email</p>
          <Link to={"mailto:gboakye007@outlook.com"}>gboakye007@outlook.com</Link>
        </div>
      </div>

      <div className="max-w-full">
        <form action="">
          <div  className="flex flex-wrap max-w-3xl">
            <div className="basis-80 shrink-1 grow-0 mb-2 mr-2">
              <label className="block mb-0.5" htmlFor="first-name">First Name</label>
              <input className="w-full outline-none p-4" type="text" name="first-name" id="first-name" />
            </div>
            <div className="basis-80 shrink-1 grow-0 mb-2 mr-2">
              <label className="block mb-0.5" htmlFor="last-name">Last Name</label>
              <input className="w-full outline-none p-4" type="text" name="last-name" id="last-name" />
            </div>
            <div className="basis-80 shrink-1 grow-0 mb-2 mr-2">
              <label className="block mb-0.5" htmlFor="email">Email</label>
              <input className="w-full outline-none p-4" type="email" name="email" id="email" />
            </div>
            <div className="basis-80 shrink-1 grow-0 mb-2 mr-2">
              <label className="block mb-0.5" htmlFor="subject">Subject</label>
              <input className="w-full outline-none p-4" type="text" name="subject" id="subject" />
            </div>
            <div className="basis-80 shrink-1 grow-0 mb-2 mr-2">
              <label className="block mb-0.5" htmlFor="description">Description</label>
              <textarea className="w-full min-h-20 outline-none p-1" name="description" id="description"></textarea>
            </div>
          
          <button className="hover:bg-slate-300 border cursor-pointer my-auto h-20 w-20 aspect-square text-xl font-bold  bg-yellow-600 rounded-full" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </main>
  )
}

export default Contact