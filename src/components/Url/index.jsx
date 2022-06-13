import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Url = ({ id, longLink, shortLink, views }) => {
  return (
    <div className="url">
      <div className="url__links">
        <Link className="url__short-link" target="_blank" to={`/${id}`}>{shortLink}</Link>
        <Link className="url__long-link" target="_blank" to={longLink}>{longLink}</Link>
      </div>
      <div className="url__views">{views}</div>
    </div>
  )
}

export default Url