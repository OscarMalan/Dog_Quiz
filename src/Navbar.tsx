import './Navbar.css';
import { useState, useEffect } from "react";
import Cookies from 'universal-cookie';
const cookies = new Cookies();
let Default_Mode: string = 'light';
if (typeof cookies.get('Darkmode') !== 'undefined'){Default_Mode = cookies.get('Darkmode');}

const Navbar = () => {
    const [Theme, Set_Theme] = useState(Default_Mode);
  const ToggleTheme = () => {
    if (Theme === 'light'){Set_Theme('dark'); cookies.set('Darkmode', 'dark');}
    else {Set_Theme('light'); cookies.set('Darkmode', 'light');}
  };
  useEffect(() => {
    document.body.className = Theme;
  }, [Theme]);
    return (
        <div id="navbar">
            <nav className='Navbar'>
              <h1>Dog Test</h1>
              <a href="/">Home</a>
              <a href="/begin_test">Begin Test</a>
              <a href="/leaderboard">Leaderboard</a>
              <a href="/test">Testing test page</a>
              <button><img src={require('./Darkmode_Lightmode.png')} alt='darkmode_lightmode' onClick={ToggleTheme} /></button>
            </nav>
        </div>
    );
}

export default Navbar;
