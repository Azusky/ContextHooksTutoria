import React, {createContext, useState} from 'react'

export const ThemeContext = createContext({})

const ThemeContextProvider = (props)=>{
    let theme_ = {
        isLightTheme: true,
        light:{ syntax: '#555', ui: '#ddd', bg:'#eee'},
        dark:{syntax: '#ddd', ui: '#333', bg:'#555'}
    }

    let [theme, setTheme] = useState(theme_)

    let toggleTheme = ()=>{
        // console.log(theme)
        setTheme({...theme ,isLightTheme: !theme.isLightTheme})
    }
    return (
        <ThemeContext.Provider value={{...theme, toggleTheme: toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    );
}

// export const useThemeContext = ()=> useContext(ThemeContext)
export default ThemeContextProvider;
