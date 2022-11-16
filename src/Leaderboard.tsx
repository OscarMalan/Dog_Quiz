import React, { useEffect } from 'react';

function Admin() {
  useEffect(() => {
    document.title = 'Leaderboard';
  }, []);
  return (
    <div id="Leaderboard">
        <p>leaderboard</p>
    </div>
  );
}

export default Admin;