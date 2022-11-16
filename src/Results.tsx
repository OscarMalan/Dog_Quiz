import React, { useEffect } from 'react';
import { Score } from './Test';
import {UserName} from './Begin_Test';
import './Results.css';

function Results() {
  useEffect(() => {
    document.title = 'Results';
  }, []);
  return (
    <div id="Results">
    <h1>Results</h1>
    <p>Congratulations {UserName}</p>
    <p>You scored {Score} / 5</p>
    <p>And the best dog is Copper Spaniel</p>
    </div>
  );
}

export default Results;