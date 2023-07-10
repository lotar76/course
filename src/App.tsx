import React, {useState} from "react";
import {Suspense} from "react";
import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";

export enum Theme{
    LIGHT='light',
   DARK='dark',
}

const App = () => {
    const [theme, setTheme] = useState<Theme>(Theme.LIGHT)
    const toggleTheme = () => {
        setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)
    }
    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>нажми</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О нас</Link>
            <Suspense fallback={<div>loading ...</div>}>
                <Routes>

                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    )
}

export default App