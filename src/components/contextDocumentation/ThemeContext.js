import { createContext } from "react";
import themes from './Themes';

const ThemeContext = createContext(themes.light);

export default ThemeContext;

