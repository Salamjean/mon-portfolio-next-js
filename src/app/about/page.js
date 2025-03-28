export default function About() {
    return (
      <div className="text-center">
        <h1 className="text-3xl font-bold text-center mb-10">À propos de moi</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Mon parcours</h2>
            <p className="mb-4 text-sm">
            Développeur Full-Stack Junior, passionné par la création d’applications web modernes et performantes. Curieux et motivé, j’aime relever des défis techniques et apprendre en continu pour améliorer mes compétences.
            </p>
            <p className="text-sm">
              Passionné par les technologies modernes comme <span className="font-bold text-blue-800">React, Next.js, Node.js et Laravel</span>.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Mes compétences</h2>
            <ul className="space-y-2">
              <li className="font-bold">Développement Frontend : <span className="text-blue-800" >HTML, CSS, JavaScript, React, Next.js</span> </li>
              <li className="font-bold">Développement Backend : <span className="text-blue-800" >PHP, Laravel, Node.js</span> </li>
              <li className="font-bold">Développement Database : <span className="text-blue-800" >MySQL, SQLite, NoSql, MongoDB</span> </li>
            </ul>
          </div>
        </div>
        <button className="mt-20 bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-600">Télécharger CV</button>
      </div>
     
    )
  }