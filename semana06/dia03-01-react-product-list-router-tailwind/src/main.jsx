import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, Routes, Route } from 'react-router'

import LoginPage from './pages/LoginPage.jsx'
import HomePage from './pages/HomePage.jsx'
import { LayoutAdmin } from './layouts/LayoutAdmin.jsx'
import { LayoutAuth } from './layouts/LayoutAuth.jsx'
import { AuthValidation } from './routes/AuthValidation.jsx'
import { ProductPage } from './pages/ProductPage.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<LayoutAuth />}>
        <Route path='/' element={<LoginPage />} />
      </Route>

      <Route element={<AuthValidation />}>
        <Route element={<LayoutAdmin />}>
          <Route path='/home' element={<HomePage />} />
          <Route path='/products' element={<ProductPage />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
)
