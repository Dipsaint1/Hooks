import React, { createContext } from 'react';
import themes from './Themes';
import Toolbar from './Toolbar';
import ThemeContext from './ThemeContext';

const UseContext = () => {

  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar/>
    </ThemeContext.Provider>
  )
}

export default UseContext;