import { Link } from 'react-router-dom'

const Blogs = () => {
    return (
        <div className="container mx-auto px-4 py-16 text-center">
            <p className="text-2xl mb-8">Our blog is coming to life soon. Stay tuned for updates!</p>
            <Link
                to="/"
                className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition duration-300"
            >
                Go back to Home
            </Link>
        </div>
    )
}

export default Blogs