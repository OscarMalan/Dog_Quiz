import React, { useEffect, useState } from 'react';
import { LeaderboardDataItem } from './Admin';

function Leaderboard() {
  const [Data, setData] = useState<LeaderboardDataItem[]>([]);

  useEffect(() => {
    document.title = 'Leaderboard';

    fetch('https://b4rktd62ol.execute-api.eu-west-2.amazonaws.com/items')
      .then((response) => response.json())
      .then((Data) => setData(Data.Items));
}, []);

// TSX wants this encase there are no entries, and since it is actually possible good thing it exists
if (Data.length === 0) {
  return (
    <p>oops!! There are no records</p>
  );
}

return (
    <div id="Leaderboard">
    <h1>Leaderboard</h1>
      <table>
        <tbody>
          <tr >
            <th>Username</th>
            <th>Score</th>
          </tr>
          {/* Makes table that will constantly update with new users */}
          {Data.map((User) => {
            return (<tr key={User.id}>
              <td>{User.Username}</td>
              <td>{User.Score}/11</td>
            </tr>);
          })}
        </tbody>
      </table>
  </div>
  );
}

export default Leaderboard;