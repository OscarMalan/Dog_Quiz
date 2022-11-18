import React, { useEffect, useState } from 'react';
import './Admin.css';

// TSX doesn't like not knowing what each variable's type is, so is defined in an interface here.
// An interface is enforcing the requirment for the types to be declared.
export interface LeaderboardDataItem {
  id: number,
  Username: string,
  Score: number,
}


function Admin() {

  // Variables and useState for updating the drop down
  const [Data, SetData] = useState<LeaderboardDataItem[]>([]);
  // Adds title for the webpage
  useEffect(() => {
    document.title = 'Admin';
    // Gets the data from the AWS API
    fetch('https://b4rktd62ol.execute-api.eu-west-2.amazonaws.com/items')
    // .then makes sure that the API is fetched before running functions that rely on the API
    .then((Response) => Response.json())
    .then((Data) => SetData(Data.Items));
  }, []);

  // Deletes entries in the API
  function Delete_Entry(id: number) {
    fetch('https://b4rktd62ol.execute-api.eu-west-2.amazonaws.com/items/' + id, {
    // The method is the HTTP request (GET, POST, DELTE, PUT, etc)
    method: "DELETE",
    // Drop down won't update till reload, so have a .then holding the reload function.
    }).then(() => window.location.reload());
  }

  // Points which entry needs to be removed from the drop down
  const [Selected_ID, Set_Selected_ID] = useState<number>();

  return (
    <div id='Admin'>
      <h1>Admin Page</h1>
      <p>Here you can delete entries on the leaderboard without having to message Stu and give him a headache.</p>
      <p>Select ID</p>

      <select name="ID" id="ID_Selector" onChange={(Event) => Set_Selected_ID(parseInt(Event.target.value))}>
        <option value="" >Select your option</option>
        {/* TSX code is making the list of entries update live */}
        {Data.map((User) => {
          return (
            <option value={User.id} key={User.id}>{User.id} {User.Username}</option> 
        );})}
      </select>
      <button onClick={() => {if (typeof Selected_ID !== 'undefined') {Delete_Entry(Selected_ID);}}}>Delete</button>
    </div>
  );
}

export default Admin;