import React from 'react'

function Card({username, position, imageSource}) {
  return (
    <div >
        <figure className="md:flex bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img className="w-24 h-24 md:object-contain md:w-48 md:h-48 md:rounded-none rounded-full mx-auto" src={imageSource} alt="" width="384" height="512" />
        <div className="pt-6 space-y-4">
            <blockquote>
            <p className="text-lg font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, ex!
            </p>
            </blockquote>
            <figcaption className="font-medium">
            <div className='text-2xl text-red-600'>
                {username}
            </div>
            <div>
                {position}
            </div>
            </figcaption>
        </div>
        </figure>
    </div>
  )
}

export default Card