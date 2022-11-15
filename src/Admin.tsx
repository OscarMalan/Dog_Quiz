import data from './Question_Data.json';


function Admin() {
  return (
    <div id="admin">
        <h1>Hello admin</h1>
        <p>{data.Question1.Answer}</p>
    </div>
  );
}

export default Admin;
