import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/Header/InitialPage'
import GlobalStyle from './style/GlobalStyle'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
)
