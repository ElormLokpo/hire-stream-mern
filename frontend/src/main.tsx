import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RootProvider as Provider} from "./providers"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Provider />
  </StrictMode>,
)
