import React from 'react';
import data from './data';
import RootContext from './RootContext';
import Child from './Child';

const UseContext = () => {
  return (
    <RootContext.Provider value={data}>
      <div>
        <Child />
      </div>
    </RootContext.Provider>
  )
}

export default UseContext;