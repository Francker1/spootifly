import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddValue = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories(() => [inputValue]);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Search..."
        />
        <button type="submit">Search</button>
      </form>
      <p>{inputValue}</p>
    </>
  );
};

AddValue.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddValue;
