import {Heart, ShoppingCart, Star} from 'lucide-react'
import {useNavigate, useParams} from 'react-router-dom'
import {useCart} from '../context/CartContext'
import {gadgets} from '../data/gadgets'

const ProductDetails = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const {addToCart, addToWishlist, wishlistItems} = useCart()

    const product = gadgets.find(item => item.product_id === parseInt(id))

    if (!product) {
        return <div className="container mx-auto px-4 py-8">Product not found</div>
    }

    const isInWishlist = wishlistItems.some(item => item.product_id === product.product_id)

    const handleAddToCart = () => {
        const success = addToCart(product)
        if (success) {
            navigate('/dashboard')
        }
    }

    const handleAddToWishlist = () => {
        addToWishlist(product)
    }

    return (
        <>
            <div className={'bg-[#9538E2] flex flex-col justify-center items-center pt-8 pb-[235px]'}>
                <h1 className={'text-white font-sora text-2xl font-bold leading-10 tracking-normal text-center'}>Product
                    Details</h1>
                <p className={'text-white font-sora text-base font-normal leading-6 tracking-normal text-center max-w-[796px]'}>Explore
                    the latest gadgets that will take your experience to the next level. From smart devices to
                    the coolest accessories, we have it all!</p>
            </div>
            <div className="container mx-auto px-4 -mt-[190px] mb-4">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex flex-col md:flex-row -mx-4">
                        <div className="px-4">
                            <div className="w-[424px] h-[503px] md:h-[503px] rounded-lg bg-gray-100">
                                <img
                                    src={product.product_image}
                                    alt={product.product_title}
                                    className="h-full w-full object-cover rounded-lg"
                                />
                            </div>
                        </div>
                        <div className="md:flex-1 px-4">
                            <h2 className="text-[#09080F] font-sora text-xl font-semibold leading-[35px] tracking-normal text-left">{product.product_title}</h2>
                            <div className="flex items-center mb-4">
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, index) => (
                                        <Star
                                            key={index}
                                            className={`w-5 h-5 ${
                                                index < Math.floor(product.rating)
                                                    ? 'text-yellow-400 fill-current'
                                                    : 'text-gray-300'
                                            }`}
                                        />
                                    ))}
                                </div>
                                <span className="ml-2 text-gray-600">{product.rating}</span>
                            </div>
                            <div className="text-xl font-bold text-purple-600 mb-4">
                                <span
                                    className={'text-[rgba(9,8,15,0.8)] font-sora text-lg font-semibold leading-[30px] tracking-normal text-left'}>Price ${product.price.toFixed(2)}</span>
                            </div>
                            <div className="mb-4">


                                <span
                                    className="box-border border border-[#309C08] rounded-[32px] bg-[rgba(48,156,8,0.1)] py-[7px] px-[14px] text-[#309C08] font-sora text-sm font-medium leading-[18px] tracking-normal text-left">{product.availability ? "In Stock" : 'Out of Stock'}</span>

                            </div>
                            <div className="mb-4">
                                <span className="font-bold text-gray-700">Description:</span>
                                <p className="text-gray-600 text-sm mt-2">{product.description}</p>
                            </div>
                            <div className="mb-4">
                                <span className="font-bold text-gray-700">Specification:</span>
                                <ul className="list-disc list-inside text-gray-600 text-sm mt-2">
                                    {product.specification.map((spec, index) => (
                                        <li key={index}>{spec}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex -mx-2 mb-4">
                                <div className="w-1/2 px-2">
                                    <button
                                        onClick={handleAddToCart}
                                        className="w-full bg-purple-600 text-white py-2 px-4 rounded-full font-bold hover:bg-purple-700 transition duration-300"
                                    >
                                        <ShoppingCart className="inline-block mr-2"/>
                                        Add to Cart
                                    </button>
                                </div>
                                <div className="w-1/2 px-2">
                                    <button
                                        onClick={handleAddToWishlist}
                                        className={`w-full py-2 px-4 rounded-full font-bold ${
                                            isInWishlist
                                                ? 'bg-gray-300 text-gray-700 cursor-not-allowed'
                                                : 'bg-gray-200 text-gray-800 hover:bg-gray-300 transition duration-300'
                                        }`}
                                        disabled={isInWishlist}
                                    >
                                        <Heart className="inline-block mr-2"/>
                                        {isInWishlist ? 'In Wishlist' : 'Add to Wishlist'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails