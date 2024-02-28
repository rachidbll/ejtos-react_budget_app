import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    // Calculate total expenses
    const totalExpenses = expenses.reduce((total, item) => {
        return total + item.cost;
    }, 0);

    const handleBudgetChange = (event) => {
        const updatedBudget = event.target.value;
        
        // Check if the new budget is not lower than the total expenses and not higher than 20000
        if (updatedBudget >= totalExpenses && updatedBudget <= 20000) {
            setNewBudget(updatedBudget);
        } else if (updatedBudget < totalExpenses) {
            alert("Budget cannot be lower than total expenses.");
        } else if (updatedBudget > 20000) {
            alert("Exceeded the budget limit of £20000!");
        }
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};

export default Budget;
