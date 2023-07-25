import React, { Component } from 'react'
import '../styles/AddExpense.css'
import Button from './Button'

export default class AddExpense extends Component {

    constructor() {
        super()
        this.state = {
            amount: '',
            reason: ''
        }
    }

    handleInput = (value, key) => {
        this.setState({ [key]: value });
    }

    submitInput = () => {
        const { reason, amount } = this.state;
        this.props.functionCall(reason, amount)
    }



    render() {
        let { functionCall, value, key } = this.props;
        console.log(key);
        return (
            <div className="add-expense">
                <div className="con">
                {console.log(value) }

                    {
                        value === "" ?
                            <input
                                type="text"
                                placeholder='Reason'
                                onChange={(data) => this.handleInput(data.target.value, "reason")} />
                            :
                            <input
                                type="text"
                                placeholder='Reason'
                                value={value}
                                onChange={(data) => this.handleInput(data.target.value, "reason")} />
                    }

                    <input
                        type="number"
                        placeholder='amount'
                        onChange={(data) => this.handleInput(data.target.value, "amount")} />
                    <Button
                        title="Submit"
                        functionCall={this.submitInput} />
                </div>
            </div>
        )
    }
}

