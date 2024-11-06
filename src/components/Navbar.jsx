import { Heart, ShoppingCart } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Navbar = () => {
  const location = useLocation()
  const { cartItems , wishlistItems } = useCart()

  return (
    <nav className={`py-6 ${location.pathname === '/' ? 'bg-transparent hidden' : 'bg-white'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-purple-600">
          GadgetHeaven✨
        </Link>

        <div className="flex items-center space-x-8">
          <Link
              to="/"
              className={`${location.pathname === '/' ? 'text-purple-600' : 'text-gray-600'} hover:text-purple-600 font-sora text-[16px] font-medium leading-[20px] tracking-[0%] text-center`}
          >
            Home
          </Link>
          <Link
              to="/statistics"
              className={`${location.pathname === '/statistics' ? 'text-purple-600' : 'text-gray-600'} hover:text-purple-600 font-sora text-[16px] font-medium leading-[20px] tracking-[0%] text-center`}
          >
            Statistics
          </Link>
          <Link
              to="/dashboard"
              className={`${location.pathname === '/dashboard' ? 'text-purple-600' : 'text-gray-600'} hover:text-purple-600  font-sora text-[16px] font-medium leading-[20px] tracking-[0%] text-center`}
          >
            Dashboard
          </Link>
          <Link
              to="/blogs"
              className={`${location.pathname === '/blogs' ? 'text-purple-600' : 'text-gray-600'} hover:text-purple-600  font-sora text-[16px] font-medium leading-[20px] tracking-[0%] text-center`}
          >
            Blogs
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/dashboard" className="relative border border-[rgba(11,11,11,0.1)] bg-white w-10 h-10 rounded-full flex items-center justify-center">
            <ShoppingCart className="w-5 h-5 text-gray-600 hover:text-purple-600"/>
            {cartItems.length > 0 && (
                <span
                    className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
            )}
          </Link>
          <Link to="/dashboard" className="relative border border-[rgba(11,11,11,0.1)] bg-white w-10 h-10 rounded-full flex items-center justify-center">
            <Heart className="w-5 h-5 text-gray-600 hover:text-purple-600"/>
            {wishlistItems.length > 0 && (
                <span
                    className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlistItems.length}
                </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar