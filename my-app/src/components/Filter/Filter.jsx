import React from 'react';

const Filter = ({ value, onChange }) => {
  return (
    <div>
      <label>
        Filter
        <input type="text" value={value} onChange={onChange} />
      </label>
    </div>
  );
};

export default Filter;
