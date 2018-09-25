import React from 'react';

export default ({ children }) => {
  return (
    <div>
      <div>Hello</div>
      <div>{children()}</div>
    </div>
  );
};
