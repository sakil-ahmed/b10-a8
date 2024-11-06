import { Star } from 'lucide-react'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-[16px] shadow-md overflow-hidden p-4">
      <img
        src={product.product_image}
        alt={product.product_title}
        className="w-full h-48 object-cover rounded-[12px] mb-6"
      />
      <div className="">
        <h3 className="text-[#09080f] font-sora text-[24px] font-semibold leading-[30px] tracking-[0%] text-left">{product.product_title}</h3>
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className={`w-4 h-4 ${
                  index < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600">{product.rating}</span>
        </div>
        <p className="text-purple-600 font-bold mb-4">${product.price.toFixed(2)}</p>
        <Link
          to={`/product/${product.product_id}`}
          className="block text-center bg-purple-600 text-white py-2 rounded-full hover:bg-purple-700 transition duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  )
}

export default ProductCard