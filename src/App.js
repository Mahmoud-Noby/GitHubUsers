import { useState } from 'react';
import CardList from './CardList';
import Form from './Form';

function App(props) {
  const [profilesArr, setProfiles] = useState([]);
   const addNewProfile = ( profile ) => {
    console.log(profile);
    setProfiles( [...profilesArr, profile])
  }
  return (
    <div className="App">
      <h1>{props.title}</h1>
      <Form onsubmit={addNewProfile}/>
      <CardList testData={profilesArr} />
    </div>
  );
}

export default App;
