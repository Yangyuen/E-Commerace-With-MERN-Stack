//import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthLayout from './components/ui/auth/layout'
import AuthLogin from './pages/auth/login'
import AuthRegister from './pages/auth/register'
import AdminLayout from './components/admin-view/Layout'
import AdminDashboard from './pages/admin-view/dashboard'
import AdminFeatures from './pages/admin-view/features'
import AdminOrders from './pages/admin-view/orders'
import AdminProducts from './pages/admin-view/products'
import ShoppingLayout from './components/shopping-view/Layout'
import NoteFound from './pages/not-found'
import ShoppingCheckout from './pages/shopping-view/checkout'
import ShoppingAccount from './pages/shopping-view/account'
import ShoppingHome from './pages/shopping-view/home'
import ShoppingListing from './pages/shopping-view/listing'
import CheckAuth from './components/common/check-auth'
import UnauthPage from './pages/unauth-page'

function App() {
  const isAuthenticated = false;
  const user = null;
  return (
    <div className='flex flex-col overflow-hidden bg-white'>
      <Routes>
        {/* Login & Register */}
        <Route path='/auth' element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AuthLayout/>
          </CheckAuth>
        }>
          <Route path='login' element={<AuthLogin/>}/>
          <Route path='register' element={<AuthRegister/>}/>
        </Route>

        {/* Admin */}
        <Route path='/admin' element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AdminLayout/>
          </CheckAuth>
        }>
          <Route path='dashboard' element={<AdminDashboard/>}/>
          <Route path='features' element={<AdminFeatures/>}/>
          <Route path='orders' element={<AdminOrders/>}/>
          <Route path='products' element={<AdminProducts/>}/>
          <Route/>
        </Route>

        {/* Shop */}
        <Route path='/shop' element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <ShoppingLayout/>
          </CheckAuth>
        }>
          <Route path='checkout' element={<ShoppingCheckout/>}/>
          <Route path='account'element={<ShoppingAccount/>}/>
          <Route path='home'element={<ShoppingHome/>}/>
          <Route path='listing'element={<ShoppingListing/>}/>
        </Route>
        <Route path='/unauth-page' element={<UnauthPage/>}/>
        <Route path="*" element={<NoteFound/>} />
      </Routes>
    </div>
  )
}

export default App