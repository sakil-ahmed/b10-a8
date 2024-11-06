import { createContext, useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const CartContext = createContext()

export const useCart = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [wishlistItems, setWishlistItems] = useState([])

  useEffect(() => {
    const storedCart = localStorage.getItem('cart')
    const storedWishlist = localStorage.getItem('wishlist')
    if (storedCart) setCartItems(JSON.parse(storedCart))
    if (storedWishlist) setWishlistItems(JSON.parse(storedWishlist))
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems))
    localStorage.setItem('wishlist', JSON.stringify(wishlistItems))
  }, [cartItems, wishlistItems])

  const addToCart = (item) => {
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0) + item.price
    // if (totalPrice > 1000) {
    //   toast.error('Cart total cannot exceed $1,000')
    //   return false
    // }
    setCartItems([...cartItems, item])
    toast.success('Added to cart!')
    return true
  }

  const addToWishlist = (item) => {
    if (!wishlistItems.some(wishItem => wishItem.product_id === item.product_id)) {
      setWishlistItems([...wishlistItems, item])
      toast.info('Added to wishlist!')
    }
  }

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter(item => item.product_id !== itemId))
  }

  const removeFromWishlist = (itemId) => {
    setWishlistItems(wishlistItems.filter(item => item.product_id !== itemId))
  }

  const clearCart = () => {
    setCartItems([])
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        wishlistItems,
        addToCart,
        addToWishlist,
        removeFromCart,
        removeFromWishlist,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}