import React from 'react'
import { Link } from 'react-router-dom'

export const  MenuItems = ({ image, title,link }) => {

  return (
    <div className="menu-item">
    <img src={image} alt={description} />
    <h3>{title}</h3>
  </div>
  )
}
