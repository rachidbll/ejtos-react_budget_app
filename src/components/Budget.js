import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseTotal from './ExpenseTotal';
const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        const updatedBudget = event.target.value;
        setNewBudget(updatedBudget);

        // Check if the new budget exceeds 20000
        if (updatedBudget > 20000) {
            alert("Exceeded the budget limit of £20000!");
            // Reset the input value to the current budget to prevent exceeding the limit
            setNewBudget(budget);
            
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
