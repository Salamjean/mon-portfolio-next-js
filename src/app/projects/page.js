import ProjectCard from '@/components/ProjectCard'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Calculatrice",
      description: "Une calculatrice fonctionnelle pour effectuer des calculs.",
      imageUrl: "/images/calculatrice.png",
      projectUrl: "https://calcu-seven-smoky.vercel.app/"
    },
    {
      id: 2,
      title: "Boutique en ligne",
      description: "C'est une boutique en ligne pour la vente des matériels informatique.",
      imageUrl: "/images/boutique.png",
      projectUrl: "https://projetzzz.vercel.app/"
    },
    {
      id: 3,
      title: "Un formulaire simple",
      description: "Site formulaire de contact simple.",
      imageUrl: "/images/web.png",
      projectUrl: "https://formulaire-rosy.vercel.app/"
    }
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-center">Mes projets</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <ProjectCard 
            key={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            projectUrl={project.projectUrl}
          />
        ))}
      </div>
    </div>
  )
}