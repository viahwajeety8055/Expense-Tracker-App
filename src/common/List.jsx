import React, { Component } from 'react'
import '../styles/List.css'
import Button from './Button'

export default class List extends Component {
  constructor() {
    super();
    this.state = {
      btn_detail: ''
    }
  }


  handleDeleteItem = () => {
    this.props.onDelete();
  }

  handleEditItem = () => {
    this.props.onEdit();
  }

  render() {
    const { title, amount } = this.props;
    return (
      <li>
        <p>{title}</p>
        <p>{amount} &#8377;</p>
        <div className="btn">
          <Button title="Edit" functionCall={this.handleEditItem} />
          <Button title="Delete" functionCall={this.handleDeleteItem} />
        </div>
      </li>
    )
  }
}
