import React from 'react'
import '../styles/Card.css'

export default function Card(props) {
  const { title , amount, className } = props;
  return (
    <div>
      <div className={className}>
          <h2>{title}</h2>
          <p>{amount} &#8377;</p>
        </div>
    </div>
  )
}
