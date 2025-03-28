import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-blue-800 text-white">
      <nav className="flex justify-between container mx-auto px-4 py-4">
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-red-300">Accueil</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-red-300">À propos</Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-red-300">Projets</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-red-300">Contact</Link>
          </li>
        </ul>
        <button className='bg-white text-black p-2 rounded-lg'>Télécharger CV</button>
      </nav>
    </header>
  )
}