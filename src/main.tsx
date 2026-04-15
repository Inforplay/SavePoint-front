import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from 'antd'
import AntContext from './contexts/AntContext'
import Rotas from './routes/Rotas'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AntContext>
      <App >
        <Rotas/>
      </App>
    </AntContext>
  </StrictMode>,
)
