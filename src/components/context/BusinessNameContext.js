import {createContext} from 'react'

const BusinessNameContext = createContext({
  businessName: '',
  setBusinessName: () => {},
})

export default BusinessNameContext;