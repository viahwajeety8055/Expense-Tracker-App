import React, { Component } from 'react'
import List from './List';

export default class ExpenseContainer extends Component {
    render() {
        const { expense, onDeleteExpense, onEditExpense } = this.props;
        return (
            <ul className='expense-list'>
                {
                    expense.length !== 0 ?
                        expense.map((expenseItem, index) => {
                            return <List
                                title={expenseItem.reason}
                                amount={expenseItem.amount}
                                key={index}
                                onDelete={() => onDeleteExpense(index)}
                                onEdit={() => onEditExpense(index)}
                            />;
                        }) : <p>No Items</p>
                }
            </ul>
        )
    }
}
