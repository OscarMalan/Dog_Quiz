import React from 'react';
import { useState, useEffect } from "react";
import Cookies from 'universal-cookie';
const cookies = new Cookies();
let Default_Mode: string = 'light';
if (typeof cookies.get('Darkmode') !== 'undefined'){Default_Mode = cookies.get('Darkmode');}
console.log(cookies.get('Darkmode'));

function Test() {
  const [Theme] = useState(Default_Mode);
  useEffect(() => {
    document.body.className = Theme;
  }, [Theme]);
  return (
    <p>Hello world</p>
  );
}

export default Test;
