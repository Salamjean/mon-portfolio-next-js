export default function Contact() {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-8 text-center">Contactez-moi</h1>
        <form className="max-w-lg mx-auto">
          <div className="flex gap-6">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">Nom</label>
            <input 
              type="text" 
              id="name" 
              className="col-6 px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              className="col-6 px-4 py-2 border rounded-lg"
              required
            />
          </div>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">Message</label>
            <textarea 
              id="message" 
              rows="5" 
              className="w-full px-4 py-2 border rounded-lg"
              required
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="bg-blue-800 w-full text-white px-6 py-3 rounded-lg hover:bg-blue-600"
          >
            Envoyer
          </button>
        </form>
      </div>
    )
  }