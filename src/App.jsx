import { useState, useEffect } from 'react'
import { createContext } from 'react'
import Switch from "react-switch";


import './App.css'
// import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'
import ReactSwitch from 'react-switch';
// import { ThemeProvider } from './context/theme'
export const ThemeContext = createContext(null)

function App() {
const [theme, setTheme] = useState('light');

const themeSwitch = () => {
  setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
}

useEffect(() => {
  document.querySelector('html').classList.remove("light", "dark")
  document.querySelector('html').classList.add(theme)
  
}, [theme]);


  return (
    <ThemeContext.Provider value={{theme, themeSwitch}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <label>{theme === 'light' ? "Light Mode" : "Dark Mode"}</label>
            <Switch onChange={themeSwitch} checked={theme === 'dark'} />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  )

}

export default App
