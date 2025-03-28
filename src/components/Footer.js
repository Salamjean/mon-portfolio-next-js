export default function Footer() {
    return (
      <footer className="bg-blue-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Mon Portfolio. Tous droits réservés.</p>
        </div>
      </footer>
    )
  }