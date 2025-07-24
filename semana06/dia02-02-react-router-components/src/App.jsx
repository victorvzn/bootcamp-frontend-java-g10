import { BrowserRouter, Route, Routes } from 'react-router'

import HomePage from './pages/HomePage'
import CharactersPage from './pages/CharactersPage'
import CharacterPage from './pages/CharacterPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/characters' element={<CharactersPage />} />
        <Route path='/characters/:id' element={<CharacterPage />} />

        <Route path='/login' element={<h1>LOGIN PAGE</h1>} />
      </Routes>
    </BrowserRouter>
  )
}
