import React from 'react'
import { useSelector } from 'react-redux'
import Header from './Header'
import UrlForm from './UrlForm'
import UrlList from './UrlList'

const App = () => {

  const theme = useSelector((state) => state.themeSlice.theme)

  return (
    <div className={`wrapper wrapper--${theme}`}>
      <div className="container">
        <Header />
        <UrlForm />
        <UrlList />
      </div>
    </div>
  )
}

export default App
