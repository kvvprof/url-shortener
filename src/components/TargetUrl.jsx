import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getUrlList, setViews } from '../redux/urlSlice'

const TargetUrl = () => {

  const urlList = useSelector((state) => state.urlSlice.urlList)
  const params = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getUrlList())
  }, [dispatch])

  useEffect(() => {
    urlList?.map(url => {
      if (url.id === params.id) {
        dispatch(setViews({ ...url, views: url.views + 1 }))
        return document.location.href = `${url.longLink}`
      }
      return url
    })
  }, [urlList, navigate, params.id, dispatch])

  return (
    <></>
  )
}

export default TargetUrl