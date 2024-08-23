import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/staticModel.css'
import Header from './components/header'
import Card_container from './components/cards_container'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Card_container />
  </StrictMode>,
)
