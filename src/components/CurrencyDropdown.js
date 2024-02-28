import React from 'react';

const CurrencyDropdown = ({ value, onChange }) => {
    const handleCurrencyChange = (event) => {
        const selectedCurrency = event.target.value;
        const allocationCurrencyElement = document.getElementById("allocationCurrency");
        if (allocationCurrencyElement) {
            allocationCurrencyElement.innerHTTML = selectedCurrency;
        }
        onChange(event);
    };
    return (
        <div>
            <select className="form-select bg-success text-light" value={value} onChange={onChange}>
                <option value="$">Currency Dollar ($)</option>
                <option value="£">Currency Pound (£)</option>
                <option value="€">Currency Euro (€)</option>
                <option value="₹">Currency Rupee (₹)</option>
            </select>
        </div>
    );
};

export default CurrencyDropdown;
