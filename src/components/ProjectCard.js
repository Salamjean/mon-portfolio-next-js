import Image from 'next/image'
import Link from 'next/link'

export default function ProjectCard({ title, description, imageUrl, projectUrl }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <Image 
        src={imageUrl} 
        alt={title} 
        width={400} 
        height={300} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link href={projectUrl} className="items-center mt-20 bg-blue-800 text-white px-6 py-1 rounded-lg hover:bg-blue-600">
          Voir le projet
        </Link>
      </div>
    </div>
  )
}