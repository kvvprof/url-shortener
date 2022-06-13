import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from '../../redux/themeSlice'
import './style.css'

const Header = () => {

  const theme = useSelector((state) => state.themeSlice.theme)
  const dispatch = useDispatch()

  return (
    <header className={`header header--${theme}`}>
      <h1 className="header__title">URL SHORTENER</h1>
      <button className={`header__theme-btn header__theme-btn--${theme}`} onClick={() => dispatch(setTheme())}>{theme === 'dark' ? 'Ligth' : 'Dark'}</button>
    </header>
  )
}

export default Header