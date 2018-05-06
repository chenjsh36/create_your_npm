import React from 'react';

const MyComponent = props => {
  return (
    <div>
      MyComponent Props:
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
};

export default MyComponent;
