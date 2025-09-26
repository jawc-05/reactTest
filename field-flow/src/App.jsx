import { useState } from 'react';

import Profile from "./components/Profile";
import Form from "./components/Form";
import ReposList from './components/ReposList';
import './App.css'

function App() {
  const [FormVisible, setFormVisible] = useState(true);
  const [nameUser, setNameUser] = useState('');

  return(
    <>
    <input type="text" onBlur={(e) => setNameUser(e.target.value)} />

      {nameUser.length > 4 &&(
        <>
          <Profile nameUser={nameUser} brand="FielFlow" />
          <ReposList nameUser={nameUser} />
        </>
      )}

    {/*FormVisible && (
      <Form />
    )}

      <button onClick={() => setFormVisible(!FormVisible)} type='button'>toggle form</button> */}
    </>
  )
}

export default App
