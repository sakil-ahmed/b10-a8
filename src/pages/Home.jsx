import { Heart, ShoppingCart } from 'lucide-react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { useCart } from '../context/CartContext'
import { gadgets } from '../data/gadgets'

const categories = ['All', ...new Set(gadgets.map(item => item.category))]

const Home = () => {
  const location = useLocation()
  const { cartItems , wishlistItems } = useCart()
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProducts = selectedCategory === 'All'
    ? gadgets
    : gadgets.filter(item => item.category === selectedCategory)

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-400 text-white pb-20 max-w-[1540px] px-5 mt-[20px] mx-auto border-[7px] border-[#f6f6f6] rounded-[32px]">
    {/* Nav Menu */}

    <nav className={`py-4 ${location.pathname === '/' ? 'bg-transparent' : 'bg-white shadow'} mb-[48px] `}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-white">
          GadgetHeaven
        </Link>

        <div className="flex items-center space-x-8">
          <Link
            to="/"
            className={`${location.pathname === '/' ? 'text-white underline font-bold' : 'text-white'}`}
          >
            Home
          </Link>
          <Link
            to="/statistics"
            className={`${location.pathname === '/statistics' ? 'text-white underline' : 'text-white'}`}
          >
            Statistics
          </Link>
          <Link
            to="/dashboard"
            className={`${location.pathname === '/dashboard' ? 'text-white underline' : 'text-white'}`}
          >
            Dashboard
          </Link>


        </div>


        <div className="flex items-center space-x-4">
            <Link to="/dashboard" className="relative w-10 h-10 bg-white flex items-center justify-center rounded-full">
              <ShoppingCart className="w-5 h-5 text-gray-600 hover:text-purple-600" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Link>
            <Link to="/dashboard" className="relative w-10 h-10 bg-white flex items-center justify-center rounded-full">
              <Heart className="w-5 h-5 text-gray-600 hover:text-purple-600" />
              {wishlistItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlistItems.length}
                </span>
              )}
            </Link>
          </div>
      </div>
    </nav>
        <div className="container mx-auto px-4 text-center relative mb-[268px]">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Upgrade Your Tech Accessorize with<br />
            Gadget Heaven Accessories
          </h1>
          <p className="text-lg mb-8">
            Explore the latest gadgets that will take your experience to the next level. From smart devices to
            the coolest accessories, we have it all!
          </p>
          <Link
            to="/dashboard"
            className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
          >
            Shop Now
          </Link>
          <div
              className={'absolute -bottom-[690px] left-[50%] -translate-x-[50%] max-w-[1110px] w-full h-[610px] p-6 rounded-[32px] bg-[rgba(255,255,255,0.3)] border-[3px] border-white'}
          >
            <img
                 src={'/hero-banner.png'} alt={''}/>
          </div>

        </div>
      </div>

      {/* Products Section */}
      <div className="container mx-auto px-4 pt-[416px] pb-16">
        <h2 className={'text-[#0b0b0b] font-sora text-[40px] font-bold leading-[50px] tracking-[0%] text-center mb-[48px]'}>Explore
          Cutting-Edge Gadgets</h2>
        <div className="flex flex-col md:flex-row gap-8">

          {/* Categories Sidebar */}
          <div className="md:w-1/4 bg-white p-6">
            <div className="space-y-2">
              {categories.map(category => (
                  <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block w-full text-left px-4 py-2 rounded-lg font-sora text-[18px] ${
                          selectedCategory === category
                              ? 'bg-purple-600 text-white'
                              : 'text-[rgba(9,8,15,0.6)]  font-medium leading-[23px] tracking-[0%] text-left'
                      }`}
                  >
                    {category}
                  </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="md:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                  <ProductCard key={product.product_id} product={product}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home