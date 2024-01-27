import ProjectCard from "../Project Card/ProjectCard"
import project from "../project"

function Projects() {
  return (
    <main className="p-4 flex flex-col w-11/12 max-w-screen-xl m-auto">
      <h2 className="font-extrabold text-3xl mb-6">Projects</h2>
      {
        project.map(item => <ProjectCard key={project.indexOf(item)} name={item.name} description={item.description} imageURL={item.imageURL} imageDes={item.imageDescription}/>)
      }
    </main>
  )
}

export default Projects