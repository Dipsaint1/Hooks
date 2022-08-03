import { useContext } from "react";

import BusinessNameContext from "./BusinessNameContext";

const useBusinessNameContext = () => {
  const {businessName, setBusinessName} = useContext(BusinessNameContext);
  return  { businessName, setBusinessName };
}

export default useBusinessNameContext;