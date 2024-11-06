import { Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { CartProvider } from './context/CartContext'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import ProductDetails from './pages/ProductDetails'
import Statistics from './pages/Statistics'
import Blogs from "./pages/Blog.jsx";

function App() {



  return (
    <Router>
      <CartProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/statistics" element={<Statistics />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <ToastContainer />
      </CartProvider>
    </Router>
  )
}

export default App