import React, { useEffect } from 'react';
import data from './User_Data.json';

for (let i = 0; i < data.length; i++){
  const Username_Column = document.createElement("tr");
  const node = document.createTextNode(data[i].Username);
  Username_Column.appendChild(node);
  const element = document.getElementById("Data");
  element?.appendChild(Username_Column);
}

function Admin() {
  useEffect(() => {
    document.title = 'Leaderboard';
  }, []);
  return (
    <div id="Leaderboard">
        <h1>Leaderboard</h1>
        <table>
          <tr >
            <th>Username</th>
            <th>Score</th>
          </tr>
            {data.map((user) => {
              return (<tr>
                <td>{user.Username}</td>
                <td>{user.Score}/11</td>
                </tr>);
            })}
        </table>
    </div>
  );
}

export default Admin;