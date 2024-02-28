import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under
import Remaining from './components/Remaining'; // Import Remaining component
import ExpenseTotal from './components/ExpenseTotal'; // Import ExpenseTotal component
import ExpenseList from './components/ExpenseList'; // Import ExpenseList component
import ExpenseItem from './components/ExpenseItem'; // Import ExpenseItem component
import AllocationForm from './components/AllocationForm';
import CurrencyDropdown from './components/CurrencyDropdown';

import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {
                            /* Add Budget component here */
                            <div className="col-sm">
                                <Budget/>
                            </div>
                        }        

                        {
                            /* Add Remaining component here*/
                            <div className="col-sm">
                                <Remaining/>
                            </div>
                        }        

                        {
                            /* Add ExpenseTotal component here */
                            <div className="col-sm">
                                <ExpenseTotal/>
                            </div>
                        }  

                        {
                            /* Add CurrencyDropDown component here */
                            <div className="col-s">
                                
                                <CurrencyDropdown/>
                            </div>
                        }      
                       
                        {
                            /* Add ExpenseList component here */
                            <div className='col-l'>
                                <ExpenseList />
                            </div>
                       }         

                        {
                            /* Add ExpenseItem component here */
                            /*<div className='col-sm'>
                                <ExpenseItem />
                            </div>*/
                        }        

                        {
                            /* Add AllocationForm component here under */
                            <div className='col-sm'>
                                <h1>Change allocation</h1>
                                <AllocationForm />
                            </div>
                        }        

                </div>
            </div>
        </AppProvider>
    );
};
export default App;

