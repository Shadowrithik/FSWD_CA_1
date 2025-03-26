import React from 'react'
import '../styles/Card.css'
function ServiceCard({service,des}) {
  return (
    <div className='card'>
      <h2>Service title: {service}</h2>
      <h2>Description: {des}</h2>
    </div>
  )
}

export default ServiceCard
