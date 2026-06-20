import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

// Get the root DOM element
const rootElement = document.getElementById('app')

// Verify root element exists
if (!rootElement) {
  throw new Error('Root element with id "app" not found in index.html')
}

// Create React root and render the application
const root = createRoot(rootElement)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
