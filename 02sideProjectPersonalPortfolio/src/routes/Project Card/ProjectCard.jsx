import PropTypes from "prop-types"

function ProjectCard({
    name,
    description,
    imageURL,
    imageDes
}) {
  return (
    <div className="mb-10 md:p-12 md:flex justify-between">
      <div className="max-w-lg">
        <h3 className="font-bold text-2xl mb-4">{name}</h3>
        <p className="leading-normal tracking-wide mb-5 text-xl">{description}</p>
      </div>
        <div className="flex justify-center items-center md:w-96 ">
          <img className="w-full max-w-80 md:max-w-none" src={imageURL} alt={imageDes} />
        </div>
      </div>
  )
}

ProjectCard.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    imageURL: PropTypes.string,
    imageDes: PropTypes.string
}

export default ProjectCard