import React, {useContext} from 'react';
// import BusinessNameContext from './BusinessNameContext';
import useBusinessNameContext from './useBusinessNameContext';

const Footer = () => {
  // const {businessName} = useContext(BusinessNameContext);
  const {businessName} = useBusinessNameContext();
  
  return (
    <p>Copyright {businessName}</p>
  )
}

export default Footer;