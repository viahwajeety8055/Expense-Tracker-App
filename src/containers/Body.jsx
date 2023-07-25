import React, { Component } from 'react'
import Card from '../common/Card'
import '../styles/Body.css'
import Button from '../common/Button'
import ExpenseContainer from '../common/ExpenseContainer'
import AddExpense from '../common/AddExpense'

export default class Body extends Component {
  constructor() {
    super()
    this.state = {
      expense_amount: '0',
      budget: '10000',
      red_alert: '0',
      expense: [],
      showExpense: true,
      signal: 'card',
      editValue: {},
      editExpense: false
    }
  }

  handleExpenseAdded = () => {
    this.setState({ addExpense: true, showExpense: false })
  }

  handleShowExpense = () => {
    this.setState({ addExpense: false, showExpense: true })
  }

  handleAddExpense = (reason, amount) => {
    let { expense, expense_amount, budget, red_alert, signal, editExpense, editValue } = this.state;

    // udpate value
    if (editExpense) {
      expense[editValue.index].amount = amount;

      // Calculate the updated expense_amount when editing an expense
      let updatedExpenseAmount = expense.reduce((total, item) => total + parseInt(item.amount), 0);

      red_alert = parseInt(budget) - updatedExpenseAmount;
      signal = parseInt(red_alert) < 0 ? "card red-alert" : "card";

      this.setState({
        addExpense: false,
        showExpense: true,
        editExpense: false,
        expense_amount: updatedExpenseAmount,
        signal,
        expense,
        red_alert
      });

      return;
    }

    expense.push({
      reason: reason,
      amount: amount
    });

    expense_amount = parseInt(expense_amount) + parseInt(amount);
    red_alert = parseInt(budget) - parseInt(expense_amount);

    parseInt(red_alert) < 0 ? signal = "card red-alert" : signal = "card";

    this.setState({ addExpense: false, showExpense: true, expense_amount: expense_amount, budget: budget, red_alert: red_alert, signal: signal, expense });
  }

  handleDeleteExpense = (index) => {
    let { expense,red_alert,budget } = this.state;
    expense.splice(index, 1);
    // Calculate the updated expense_amount when editing an expense
    let updatedExpenseAmount = expense.reduce((total, item) => total + parseInt(item.amount), 0);

    red_alert = parseInt(budget) - updatedExpenseAmount;
    if(updatedExpenseAmount === 0)
      red_alert = 0;
    this.setState({
      expense_amount: updatedExpenseAmount,
      expense,
      red_alert
    });

    // this.setState({
    //   expense,
    // });
  }

  handleEditExpense = (index) => {
    let { expense, editValue, editExpense } = this.state;

    const val = expense.filter((value, ind) => {
      if (ind === index)
        return value
    })

    editValue = {
      reason: val[0].reason,
      amount: val[0].amount,
      index: index
    }
    this.setState({ editValue }, () => {
      console.log(this.state)
    });

    this.setState({ editExpense: true, showExpense: false });
  }

  render() {
    const { expense, showExpense, expense_amount, budget, red_alert, signal, editValue, editExpense } = this.state;
    return (
      <div>
        <div className="display-section">
          <Card title="Expense" amount={expense_amount} className="card" />
          <Card title="Budget" amount={budget} className="card" />
          <Card title="Red Alert" amount={red_alert} className={signal} />
        </div>
        <div className="expense-section">
          <div className="button-section">
            <Button title="Add Expense" functionCall={this.handleExpenseAdded} />
            <Button title="Show Expense" functionCall={this.handleShowExpense} />
          </div>
          <div className="view-expense">
            {
              showExpense ? <ExpenseContainer
                expense={expense}
                onDeleteExpense={this.handleDeleteExpense}
                onEditExpense={this.handleEditExpense}
              /> :
                editExpense ?
                  (<AddExpense
                    functionCall={this.handleAddExpense}
                    value={editValue.reason}
                  />)
                  :
                  (<AddExpense
                    functionCall={this.handleAddExpense}
                    value=""
                  />)
            }
          </div>
        </div>
      </div>
    )
  }
}