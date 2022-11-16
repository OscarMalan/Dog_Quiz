import React, { useEffect } from 'react';
import './Error.css';

function Error() {
  useEffect(() => {
    document.title = 'Page Not Found';
  }, []);
  return (
    <div id='error'>
    <h1>Error 404</h1>
    <p>Sucks to go to the wrong page right?</p>
    </div>
  );
}

export default Error;