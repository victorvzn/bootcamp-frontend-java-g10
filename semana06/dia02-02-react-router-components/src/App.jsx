import { BrowserRouter, Route, Routes } from 'react-router'

import HomePage from './pages/HomePage'
import CharactersPage from './pages/CharactersPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/characters' element={<CharactersPage />} />

        <Route path='/login' element={<h1>LOGIN PAGE</h1>} />
      </Routes>
    </BrowserRouter>
  )
}
