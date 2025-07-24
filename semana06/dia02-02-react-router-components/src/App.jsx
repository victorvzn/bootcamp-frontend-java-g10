import { BrowserRouter, Route, Routes } from 'react-router'

import HomePage from './pages/HomePage'
import CharactersPage from './pages/CharactersPage'
import CharacterPage from './pages/CharacterPage'
import LayoutBase from './layouts/LayoutBase'
import LayoutAuth from './layouts/LayoutAuth'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutBase />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/characters' element={<CharactersPage />} />
          <Route path='/characters/:id' element={<CharacterPage />} />
        </Route>

        <Route element={<LayoutAuth />}>
          <Route path='/login' element={<h1>LOGIN PAGE</h1>} />
          <Route path='/register' element={<h1>REGISTER PAGE</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
