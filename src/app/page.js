import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">Bienvenue sur mon portfolio</h1>
      <div className="flex justify-center mb-8">
        <Image 
          src="/images/profil.jpg" 
          alt="Photo de profil" 
          width={200} 
          height={200} 
          className="rounded-full"
        />
      </div>
      <p className="text-xl mb-6">
        Je suis un développeur passionné par la création d'applications web et mobile modernes.
      </p>
      <Link 
        href="/projects" 
        className="bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
        target='_blank'
      >
        Voir mes projets
      </Link>
    </div>
  )
}