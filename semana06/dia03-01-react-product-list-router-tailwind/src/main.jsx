import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, Routes, Route } from 'react-router'

import LoginPage from './pages/LoginPage.jsx'
import HomePage from './pages/HomePage.jsx'
import { LayoutAdmin } from './layouts/LayoutAdmin.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginPage />} />

      <Route element={<LayoutAdmin />}>
        <Route path='/home' element={<HomePage />} />
      </Route>
    </Routes>
  </BrowserRouter>,
)
