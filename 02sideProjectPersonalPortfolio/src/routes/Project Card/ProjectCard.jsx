import PropTypes from "prop-types"

function ProjectCard({
    name,
    description,
    imageURL,
    imageDes
}) {
  return (
    <div className="mb-10">
        <h3 className="font-bold text-2xl mb-4">{name}</h3>
        <p className="leading-normal tracking-wide mb-5 text-xl">{description}</p>
        <div className="flex justify-center items-center">
          <img className="w-full max-w-80" src={imageURL} alt={imageDes} />
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