import React from 'react';

const BBB = ({ value, onChange }) => {
  return (
    <label>
      filter
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};

export default BBB;
