// import React from 'react'
// import './filter.css'

// export const Filter = () => {
//   return (
//     <div className= "filter">
//     <h1>Shop The Latest</h1>
//    <div className="input-search">
//    <input type="text" value="" placeholder="Search..." /> <img src="./img/shop/filter/find.svg" alt="" />

//    </div>

//     </div>
//   )
// }
import React, { useState } from 'react';

const CustomRangeSlider = ({ min, max, onRangeChange }) => {
  const [values, setValues] = useState({ min, max });

  const handleInputChange = (e, type) => {
    const newValue = parseInt(e.target.value, 10);

    setValues((prevValues) => ({
      ...prevValues,
      [type]: newValue,
    }));
  };

  const handleRangeChange = () => {
    onRangeChange(values);
  };

  return (
    <div>
      <label htmlFor="min"></label>
      <input
        type="number"
        id="min"
        value={values.min}
        onChange={(e) => handleInputChange(e, 'min')}
        onBlur={handleRangeChange}
      />
      <label htmlFor="max">$</label>
      <input
        type="number"
        id="max"
        value={values.max}
        onChange={(e) => handleInputChange(e, 'max')}
        onBlur={handleRangeChange}
      />
    </div>
  );
};

export const Filter = ({ onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleRangeChange = (newRange) => {
    setPriceRange(newRange);
  };

  const handleFilterApply = () => {
    onFilterChange({ searchTerm, category, priceRange });
  };

  return (
    <div className="filter">
      <h1>Shop The Latest</h1>
      <div className="input-search">
        <input
          type="text"
          value={searchTerm}
          placeholder="Search..."
          onChange={handleSearchChange}
        />
        <img src="./img/shop/filter/find.svg" alt="" />
      </div>
      <div className="select-category">
        <label htmlFor="category">Category:</label>
        <select id="category" value={category} onChange={handleCategoryChange}>
          <option value="">All categories</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          {/* Add other categories as needed */}
        </select>
      </div>
      <div>
        <label>Price:</label>
        <CustomRangeSlider min={0} max={1000} onRangeChange={handleRangeChange} />
      </div>
      <button onClick={handleFilterApply}>Apply Filters</button>
    </div>
  );
};





// export default Sidebar;
