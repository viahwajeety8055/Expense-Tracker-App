import React from 'react'
import Logo from '../common/Logo'
import '../styles/Header.css'

export default function Header() {
  return (
    <div className='main-container'>
      <Logo />
      <div className='child'>
        <h1>Expense Tracker</h1>
      </div>
    </div>
  )
}