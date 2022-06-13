import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import App from './components/App'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import TargetUrl from './components/TargetUrl'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/:id" element={<TargetUrl />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)