import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-6xl font-bold text-purple-600 mb-4">404</h1>
      <p className="text-2xl mb-8">Oops! The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition duration-300"
      >
        Go back to Home
      </Link>
    </div>
  )
}

export default NotFound