import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Layout from './layouts/Layout'
import NotFound from './pages/notFound/NotFound'
import AboutUs from './pages/aboutUsPage/AboutUs';
import HomePage from './pages/homePage/HomePage';
import ProductDetail from './pages/productDetail/ProductDetail';
import Cart from './pages/shoppingCart/Cart';
import ListProduct from './pages/listProduct/ListProduct';
import LayoutProfileUser from './layouts/LayoutProfileUser';
import ProfileUser from './pages/profileUser/ProfileUser';
import ChangePassword from './pages/changePasswordPage/ChangePassword';
import PurchaseOrder from './pages/purchaseOrder/PurchaseOrder';
import Dashboard from './pages/adminPage/dashboard/Dashboard';
import ComboDetail from './pages/comboDetail/ComboDetail';


function App() {

  return (
    <div className="min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<Layout Component={NotFound} />} />
          <Route path='/' element={<Layout Component={HomePage} />} />
          <Route path='/about-us' element={<Layout Component={AboutUs} />} />
          <Route path='/product/:slug' element={<Layout Component={ProductDetail} />} />
          <Route path='/combo/:slug' element={<Layout Component={ComboDetail} />} />
          <Route path='/cart' element={<Layout Component={Cart} />} />
          <Route path='/list-product/:id' element={<Layout Component={ListProduct} />} />

          {/* Profile */}
          <Route path='/profile' element={<LayoutProfileUser Component={ProfileUser} />} />
          <Route path='/changepassword' element={<LayoutProfileUser Component={ChangePassword} />} />
          <Route path='/purchaseorder' element={<LayoutProfileUser Component={PurchaseOrder} />} />
          {/* End Profile */}

          {/* Admin */}
          <Route path='/admin' element={<Layout Component={Dashboard} />} />
          {/* End Admin */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
