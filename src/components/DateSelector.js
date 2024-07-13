import React from 'react';

const DateSelector = ({ defaultDate, onDateChange }) => {
    return (
        <div className="flex flex-col items-center mb-4">
            <label htmlFor="date" className="mb-2 text-lg font-medium text-gray-700">
                Select a Month and Year:
            </label>
            <input
                type="month"
                id="date"
                className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={e => onDateChange(e.target.value)}
                min="2022-01"
                max="2024-04"
                value={defaultDate} // Set the default date
            />
        </div>
    );
};

export default DateSelector;