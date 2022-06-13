import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUrlList } from '../../redux/urlSlice'
import Url from '../Url'
import './style.css'

const UrlList = () => {

  const dispatch = useDispatch()
  const urlList = useSelector((state) => state.urlSlice.urlList)

  useEffect(() => {
    dispatch(getUrlList())
  }, [dispatch])

  return (
    <section className="url-list">
      <h2 className="url-list__title">LIST OF LINKS</h2>
      {
        urlList?.map(url => <Url key={url.id} id={url.id} longLink={url.longLink} shortLink={url.shortLink} views={url.views} />)
      }
    </section>
  )
}

export default UrlList