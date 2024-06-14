import React from 'react';

const categories = [
    'anti-social-behaviour',
    'bicycle-theft',
    'burglary',
    'criminal-damage-arson',
    'drugs',
    'other-theft',
    'possession-of-weapons',
    'public-order',
    'robbery',
    'shoplifting',
    'theft-from-the-person',
    'vehicle-crime',
    'violent-crime',
    'other-crime'
];

const CrimeFilter = ({ selectedCategories, onCategoryChange, onSelectAll, onDeselectAll }) => {
    const handleChange = (category) => {
        onCategoryChange(category);
    };

    return (
        <div className="flex flex-col items-center mb-4">
            <label className="mb-2 text-lg font-medium text-gray-700">Select Crime Categories:</label>
            <div className="flex space-x-2 mb-2">
                <button
                    onClick={onSelectAll}
                    className="px-3 py-1 bg-blue-500 text-white rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Select All
                </button>
                <button
                    onClick={onDeselectAll}
                    className="px-3 py-1 bg-red-500 text-white rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                    Deselect All
                </button>
            </div>
            {categories.map((category) => (
                <label key={category} className="flex items-center mb-1">
                    <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleChange(category)}
                        className="mr-2"
                    />
                    {category.replace('-', ' ')}
                </label>
            ))}
        </div>
    );
};

export default CrimeFilter;