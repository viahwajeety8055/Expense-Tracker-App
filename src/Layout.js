import React, { Component } from 'react'
import Header from './containers/Header'
import Body from './containers/Body'

export default class Layout extends Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <Body />
      </div>
    )
  }
}
