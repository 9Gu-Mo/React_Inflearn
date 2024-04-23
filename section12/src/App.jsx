import './App.scss'
import './assets/scss/base/reset.scss'
import Router from './Router'
import Header from './layouts/Header'

function App() {
  return (
    <div className='App'>
      <Header />
      <Router />
    </div>
  )
}

export default App
