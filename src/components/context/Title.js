import React, {useContext} from 'react';
// import BusinessNameContext from './BusinessNameContext';
import useBusinessNameContext from './useBusinessNameContext';

const Title = () => {
  // const {businessName} = useContext(BusinessNameContext);
  const { businessName } = useBusinessNameContext();
  
  return (
    <p> Business name: { businessName }</p> 
  )
}

export default Title;