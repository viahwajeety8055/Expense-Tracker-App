import React, { Component } from 'react'
import '../styles/Button.css'

export default class Button extends Component {
  constructor(){
    super();
  }

  render() {
    const { title, functionCall } = this.props;
    return (
      <div className='btn-design' onClick={functionCall}>
        {title}
      </div>
    )
  }
}
