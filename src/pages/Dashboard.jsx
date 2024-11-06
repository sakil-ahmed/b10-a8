import {Heart, ShoppingCart, X} from 'lucide-react'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {useCart} from '../context/CartContext'
import PaymentSuccessModal from "../components/PaymentSuccessModal.jsx";

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('cart')
    const {cartItems, wishlistItems, removeFromCart, removeFromWishlist, addToCart, clearCart} = useCart()
    const navigate = useNavigate()
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [sortOrder, setSortOrder] = useState('desc')

    const sortedCartItems = [...cartItems].sort((a, b) => {
        return sortOrder === 'desc' ? b.price - a.price : a.price - b.price
    })

    const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0)

    const handleRemoveFromCart = (itemId) => {
        removeFromCart(itemId)
    }

    const handleRemoveFromWishlist = (itemId) => {
        removeFromWishlist(itemId)
    }

    const handleAddToCartFromWishlist = (item) => {
        const success = addToCart(item)
        if (success) {
            removeFromWishlist(item.product_id)
        }
    }

    const handlePurchase = () => {
        if (sortedCartItems.length > 0) {
            setIsModalOpen(true)
        }
    }

    const toggleSortOrder = () => {
        setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')
    }

    return (
        <>
            <div className={'bg-purple-600 flex flex-col items-center justify-center py-8'}>
                <h1 className="text-white font-sora text-[32px] font-bold leading-[40px] tracking-[0%] text-center mb-4">Dashboard</h1>
                <p className={'text-white font-sora text-[16px] font-normal leading-[26px] tracking-[0%] text-center max-w-[796px] w-full mx-auto mb-8'}>Explore
                    the latest gadgets that will take your experience to the next level. From smart devices to
                    the coolest accessories, we have it all!</p>
                <div className="flex mb-4">
                    <button
                        className={`mr-4 px-4 py-2 rounded-full border border-gray-200 ${
                            activeTab === 'cart' ? 'bg-gray-200 text-[#9538E2]' : 'bg-transparent text-gray-200'
                        }`}
                        onClick={() => setActiveTab('cart')}
                    >
                        <ShoppingCart className="inline-block mr-2"/>
                        Cart
                    </button>
                    <button
                        className={`px-4 py-2 rounded-full  border border-gray-200 ${
                            activeTab === 'wishlist' ? 'bg-gray-200 text-[#9538E2]' : 'bg-transparent text-gray-200'
                        }`}
                        onClick={() => setActiveTab('wishlist')}
                    >
                        <Heart className="inline-block mr-2"/>
                        Wishlist
                    </button>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">


                {activeTab === 'cart' && (
                    <div>
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-bold">Cart</h2>
                            <div className={'flex items-center justify-center gap-3'}>
                                <span className="text-xl font-bold">
                Total: ${totalPrice.toFixed(2)}
              </span>
                                <button
                                    className="bg-purple-600 text-white px-4 py-2 rounded-full"
                                    onClick={toggleSortOrder}
                                >
                                    Sort by Price {sortOrder === 'desc' ? '↓' : '↑'}
                                </button>
                                <button
                                    onClick={handlePurchase}
                                    className="bg-purple-600 text-white py-2 px-4 rounded-full font-bold hover:bg-purple-700 transition duration-300"
                                    disabled={cartItems.length === 0}
                                >
                                    Purchase
                                </button>
                            </div>
                        </div>
                        {sortedCartItems.map(item => (
                            <div key={item.product_id}
                                 className="bg-white rounded-lg shadow-md p-6 mb-4 flex items-center relative">
                                <img src={item.product_image} alt={item.product_title}
                                     className="w-[200px] h-[124px] object-cover mr-4 rounded-[12px]"/>
                                <div className="flex-grow">
                                    <h3 className="text-[#09080f] font-sora text-[24px] font-semibold leading-[30px] tracking-[0%] text-left">{item.product_title}</h3>
                                    <p className={'text-[rgba(9,8,15,0.6)] font-sora text-[18px] font-normal leading-[30px] tracking-[0%] text-left'}>{item.description}</p>
                                    <p className="text-[rgba(9,8,15,0.8)] font-sora text-[20px] font-semibold leading-[30px] tracking-[0%] text-left">${item.price.toFixed(2)}</p>
                                </div>
                                <button
                                    onClick={() => handleRemoveFromCart(item.product_id)}
                                    className="text-red-600 w-9 h-9 flex items-center justify-center hover:text-red-800 absolute top-[24px] right-[24px] border border-red-500 bg-white rounded-full"
                                >
                                    <X className="w-6 h-6"/>
                                </button>
                            </div>
                        ))}

                    </div>
                )}

                {activeTab === 'wishlist' && (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Wishlist Items</h2>

                        {wishlistItems.map(item => (
                            <div key={item.product_id}
                                 className="bg-white rounded-lg shadow-md p-6 mb-4 flex items-center relative">
                                <img src={item.product_image} alt={item.product_title}
                                     className="w-[200px] h-[124px] object-cover mr-4 rounded-[12px]"/>
                                <div className="flex-grow flex flex-col gap-2">
                                    <h3 className="text-[#09080f] font-sora text-[24px] font-semibold leading-[30px] tracking-[0%] text-left">{item.product_title}</h3>
                                    <p className={'text-[rgba(9,8,15,0.6)] font-sora text-[18px] font-normal leading-[30px] tracking-[0%] text-left'}>{item.description}</p>
                                    <p className="text-[rgba(9,8,15,0.8)] font-sora text-[20px] font-semibold leading-[30px] tracking-[0%] text-left">${item.price.toFixed(2)}</p>
                                    <button
                                        onClick={() => handleAddToCartFromWishlist(item)}
                                        className="w-fit bg-purple-600 text-white py-1 px-3 rounded-full mr-2 hover:bg-purple-700 transition duration-300"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                                <button
                                    onClick={() => handleRemoveFromWishlist(item.product_id)}
                                    className="text-red-600 w-9 h-9 flex items-center justify-center hover:text-red-800 absolute top-[24px] right-[24px] border border-red-500 bg-white rounded-full"
                                >
                                    <X className="w-6 h-6"/>
                                </button>
                            </div>
                        ))}
                    </div>
                )}
                <PaymentSuccessModal isOpen={isModalOpen}
                                     onClose={() => {
                                         setIsModalOpen(false);
                                         clearCart();
                                         navigate('/')
                                     }} total={totalPrice}/>
            </div>
        </>
    )
}

export default Dashboard