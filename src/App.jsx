import { BrowserRouter,Route,Routes } from 'react-router-dom'
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
import RegisterPage from './pages/registerPage/RegisterPage';
import LoginPage from './pages/loginPage/LoginPage/LoginPage'
import LayoutAdmin from './layouts/LayoutAdmin';
import AdminUser from './pages/adminPage/adminUser/AdminUser';
import AdminOrder from './pages/adminPage/adminOrder/AdminOrder';
import AdminProduct from './pages/adminPage/adminProduct/AdminProduct';
import AdminProductAdd from './pages/adminPage/adminProduct/addProduct/AddProduct';
import UpdateProduct from './pages/adminPage/adminProduct/updateProduct/UpdateProduct';
import ViewProduct from './pages/adminPage/adminProduct/viewProduct/ViewProduct';
import ThankyouPage from './pages/thankyouPage/thankyou';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path='/' element={<Layout Component={HomePage} />} />
          <Route path='/about-us' element={<Layout Component={AboutUs} />} />
          <Route path='/product/:slug' element={<Layout Component={ProductDetail} />} />
          <Route path='/cart' element={<Layout Component={Cart} />} />
          <Route path='/list-product/:id' element={<Layout Component={ListProduct} />} />
          <Route path='/signup' element={<Layout Component={RegisterPage} />} />
          <Route path='/signin' element={<Layout Component={LoginPage} />} />
          <Route path='/thankyou' element={<ThankyouPage/>} />

          {/* Profile */}
          <Route path='/profile' element={<LayoutProfileUser Component={ProfileUser} />} />
          <Route path='/changepassword' element={<LayoutProfileUser Component={ChangePassword} />} />
          <Route path='/purchaseorder' element={<LayoutProfileUser Component={PurchaseOrder} />} />
          {/* End Profile */}


          {/* Admin */}
          <Route path='/admin' element={<LayoutAdmin Component={Dashboard} />} />
          <Route path='/admin/user' element={<LayoutAdmin Component={AdminUser} />} />
          <Route path='/admin/order' element={<LayoutAdmin Component={AdminOrder} />} />
          <Route path='/admin/product' element={<LayoutAdmin Component={AdminProduct} />} />
          <Route path='/admin/product/add' element={<LayoutAdmin Component={AdminProductAdd} />} />
          <Route path='/admin/product/update/1' element={<LayoutAdmin Component={UpdateProduct} />} />
          <Route path='/admin/product/detail/1' element={<LayoutAdmin Component={ViewProduct} />} />
          {/* End Admin */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
