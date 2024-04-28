import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
// import './assets/scss/reset.scss'
import {BrowserRouter} from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
