import './Navbar.css';
import { useState, useEffect } from "react";
import Cookies from 'universal-cookie';
const cookies = new Cookies();
// Need a Default_Mode otherwise it wont run cause of the risk of null values
let Default_Mode: string = 'light';
// Picks which mode when page loads
if (typeof cookies.get('Darkmode') !== 'undefined'){Default_Mode = cookies.get('Darkmode');}

const Navbar = () => {

  const [Theme, Set_Theme] = useState(Default_Mode);
  
  // Controls which theme is active and updates the cookies
  const Toggle_Theme = () => {
    if (Theme === 'light') {
      Set_Theme('dark');
      cookies.set('Darkmode', 'dark');
    }
    else {
      Set_Theme('light');
      cookies.set('Darkmode', 'light');
    }
  };

  useEffect(() => {
    document.body.className = Theme;
  }, [Theme]);
  
  return (
    <div id="Navbar">
      <nav className='Navbar'>
        <h1>Dog Test</h1>
        <a href="/">Home</a>
        <a href="/begin_test">Begin Test</a>
        <a href="/leaderboard">Leaderboard</a>
        { /* Comment these hrefs out outside of debugging */ }
        {/* <a href="/results">results</a>
        <a href="/test">test</a>
        <a href="/admin">admin</a> */}
        { /* Comment these hrefs out outside of debugging */ }
        <button><img src={require('./Darkmode_Lightmode.png')} alt='darkmode_lightmode' onClick={Toggle_Theme} /></button>
      </nav>
    </div>
  );
}

export default Navbar;
