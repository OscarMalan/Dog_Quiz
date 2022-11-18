import React, { useEffect } from 'react';
import './Results.css';

function Results() {
  let Username = sessionStorage.getItem('Username');
  let Score = sessionStorage.getItem("Score");
  useEffect(() => {
    document.title = 'Results';
    
    // Session storage is similar to cookies, however only exists for as long as a tab to the site is open, think of it like ram

      // Update the API with new entries
      fetch('https://b4rktd62ol.execute-api.eu-west-2.amazonaws.com/items', {
          method: "PUT",
          headers: {"Content-Type": 'application/json'},
          body: JSON.stringify({
            // Having the id, Username and Score defined, with the features being grabbed from sessionStorage and cookies
            id: parseInt(sessionStorage.getItem('id') ?? ''),
            Username: sessionStorage.getItem('Username') ?? '',
            Score: parseInt(sessionStorage.getItem('Score') ?? '')
          })
        });
  }, []);
  
  return (
    <div id="Results">
      <h1>Results</h1>
      <p>Congratulations {Username}</p>
      <p>You scored {Score}/11</p>
      <p>And the best dog breed is Cocker Spaniel</p>
      <img src={require("./Spaniel.png")} alt="best doggo" />
    </div>
  );
}

export default Results;