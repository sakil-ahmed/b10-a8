import { Link } from 'react-router-dom'

const Footer = () => {
  return (
      <footer className="bg-white py-8">
        <div className="w-full md:w-1/4 mb-6 md:mb-0 flex flex-col items-center justify-center text-center mx-auto">
          <h2 className="text-[#09080f] font-sora text-[32px] font-bold leading-[40px] tracking-[0%] text-center">Gadget Heaven</h2>
          <p className="text-[rgba(9,8,15,0.6)] font-sora text-[16px] font-medium leading-[20px] tracking-[0%] text-center mt-3">
            Leading the way in cutting-edge technology and innovation.
          </p>
        </div>
        <div className='border-b border-[rgba(9,8,15,0.1)] my-8'></div>
        <div className="container mx-auto px-4">

          <div className="flex flex-wrap justify-around">

            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-[#09080f] font-sora text-[18px] font-bold leading-[23px] tracking-[0%] text-center mb-4">Services</h3>
              <ul className="text-gray-600">
                <li className="flex items-center justify-center"><Link to="/" className="hover:text-purple-600 text-[rgba(9,8,15,0.6)] font-sora text-[16px] font-normal leading-[32px] tracking-[0%] text-center">Product Support</Link></li>
                <li className="flex items-center justify-center"><Link to="/" className="hover:text-purple-600 text-[rgba(9,8,15,0.6)] font-sora text-[16px] font-normal leading-[32px] tracking-[0%] text-center">Order Tracking</Link></li>
                <li className="flex items-center justify-center"><Link to="/" className="hover:text-purple-600 text-[rgba(9,8,15,0.6)] font-sora text-[16px] font-normal leading-[32px] tracking-[0%] text-center">Shipping & Delivery</Link></li>
                <li className="flex items-center justify-center"><Link to="/" className="hover:text-purple-600 text-[rgba(9,8,15,0.6)] font-sora text-[16px] font-normal leading-[32px] tracking-[0%] text-center">Returns</Link></li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-[#09080f] font-sora text-[18px] font-bold leading-[23px] tracking-[0%] text-center mb-4">Company</h3>
              <ul className="text-gray-600">
                <li className="flex items-center justify-center"><Link to="/" className="hover:text-purple-600 text-[rgba(9,8,15,0.6)] font-sora text-[16px] font-normal leading-[32px] tracking-[0%] text-center">About Us</Link></li>
                <li className="flex items-center justify-center"><Link to="/" className="hover:text-purple-600 text-[rgba(9,8,15,0.6)] font-sora text-[16px] font-normal leading-[32px] tracking-[0%] text-center">Careers</Link></li>
                <li className="flex items-center justify-center"><Link to="/" className="hover:text-purple-600 text-[rgba(9,8,15,0.6)] font-sora text-[16px] font-normal leading-[32px] tracking-[0%] text-center">Contact</Link></li>
              </ul>
            </div>
            <div className="w-full md:w-1/4">
              <h3 className="text-[#09080f] font-sora text-[18px] font-bold leading-[23px] tracking-[0%] text-center mb-4">Legal</h3>
              <ul className="text-gray-600">
                <li className="flex items-center justify-center"><Link to="/" className="hover:text-purple-600 text-[rgba(9,8,15,0.6)] font-sora text-[16px] font-normal leading-[32px] tracking-[0%] text-center">Terms of Service</Link></li>
                <li className="flex items-center justify-center"><Link to="/" className="hover:text-purple-600 text-[rgba(9,8,15,0.6)] font-sora text-[16px] font-normal leading-[32px] tracking-[0%] text-center">Privacy Policy</Link></li>
                <li className="flex items-center justify-center"><Link to="/" className="hover:text-purple-600 text-[rgba(9,8,15,0.6)] font-sora text-[16px] font-normal leading-[32px] tracking-[0%] text-center">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
            <p>&copy; 2023 Gadget Heaven. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer