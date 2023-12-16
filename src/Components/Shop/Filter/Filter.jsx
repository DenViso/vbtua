import React, { useState } from "react";
import ReactSlider from "react-slider";
import "./filter.css";

export const Filter = ({ onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 180]);
  const [clic1, setClic1] = useState(false);
  const [clic2, setClic2] = useState(false);
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleFilterApply = () => {
    onFilterChange({ searchTerm, category, priceRange: priceRange });
  };
  const buttunClick1 = () => {
    setClic1(prev=> !prev);
    
  }
  const buttunClick2 = () => {
    setClic2(prev=> !prev);
    
  }

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
        <select
          className="category"
          id="category"
          value={category}
          onChange={handleCategoryChange}
        >
          <option value="">Shop By</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          {/* Add other categories as needed */}
        </select>

        <select
          className="category"
          id="category"
          value={category}
          onChange={handleCategoryChange}
        >
          <option value="">Sort By</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          {/* Add other categories as needed */}
        </select>
      </div>
      <div className="price-range">
        <ReactSlider
          className="horizontal-slider"
          thumbClassName="example-thumb"
          trackClassName="example-track"
          defaultValue={[0, 180]}
          min={0}
          max={180}
          onChange={(value, index) => setPriceRange(value)}
        />
        <div className="price-value">
          <h3>
            Price :${priceRange[0]} - ${priceRange[1]}
          </h3>
          <h3>Filter</h3>
        </div>
      </div>
      <div className="price-button">
       <div className="but-Sale">
         <h3>On sale</h3>
         <button onClick={()=>buttunClick1()}><span className={clic1?"active":"not-active"}></span></button>
       </div>
       <div className="but-Sale">
         <h3>In stock</h3>
         <button onClick={()=>buttunClick2()}><span className={clic2?"active":"not-active"}></span></button>
       </div>
        

      </div>
    </div>
  );
};

