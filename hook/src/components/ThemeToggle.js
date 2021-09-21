import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";

const ThemeToggle = () =>{
    const {toggleTheme} =  useContext(ThemeContext);
    return(
        <button onClick={toggleTheme}>Theme</button>
    )
}
export default ThemeToggle
