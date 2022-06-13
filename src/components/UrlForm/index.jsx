import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { createUrl } from '../../redux/urlSlice'
import uniqid from 'uniqid'
import './style.css'

const UrlForm = () => {
  
  const theme = useSelector((state) => state.themeSlice.theme)
  const dispatch = useDispatch()

  const {
    register,
    formState: {
      errors,
      isValid
    },
    handleSubmit,
    reset,
    setFocus
  } = useForm({ mode: 'onChange' })

  const onSubmit = formData => {
    const id = uniqid.time()
    const data = {
      id,
      longLink: formData.url,
      shortLink: `http://localhost:3000/${id}`,
      views: 0
    }
    dispatch(createUrl(data))
    reset({ url: '' })
  }

  useEffect(() => {
    setFocus('url')
  }, [setFocus])

  return (
    <section className="url-form">
      <form className="url-form__form" onSubmit={handleSubmit(onSubmit)}>
        <input
          className={`url-form__form-input url-form__form-input--${theme}`}
          type="text"
          placeholder="Insert a long link here..."
          autoFocus
          {...register('url', { required: true })} />
        <button className={`url-form__form-btn url-form__form-btn--${theme}`} type="submit" disabled={!isValid}>Create</button>
      </form>
      {errors?.url && <p className="url-form__error">The field is required to fill in</p>}
    </section>
  )
}

export default UrlForm