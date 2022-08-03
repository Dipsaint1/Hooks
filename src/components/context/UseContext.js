import React, { useState } from 'react';
import BusinessNameContext from './BusinessNameContext';
import Homepage from './Homepage';

const UseContext = () => {
  const [businessName, setBusinessName] = useState('Ayodeji Oladapo');

  return (
    <>
      <BusinessNameContext.Provider value={{businessName, setBusinessName}}>
        <Homepage />
      </BusinessNameContext.Provider>
    </>
  )
}

export default UseContext; 