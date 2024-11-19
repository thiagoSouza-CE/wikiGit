import {useState} from 'react';

import './style.css';
import background from "../../assets/background.png";

import { Header } from "../../components/Header";
import UserInfo  from "../../components/UserInfo";
import RepoList from "../../components/RepoList";

function App() {

  const [user, setUser] = useState(null)
  const [currentUser, setCurrentUser] = useState(null)
  const [repos, setRepo] = useState(null)

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();
    if (newUser?.name) {
      const {avatar_url, name, login, bio} = newUser;
      setCurrentUser({avatar_url, name, login, bio});

      const repoData = await fetch(`https://api.github.com/users/${user}/repos`)
      const newRepos = await repoData.json();

      console.log(newRepos);
      if(newRepos?.length) {
        setRepo(newRepos);
      } 
    }
}

  return (
    <div className="App">
      <Header/>
      <div className="content">
          <img src={background} className="background" alt="background.png"></img>
          <div className="info">
            <div>
              <input name="usuario" placeholder="@username" onChange={event => setUser(event.target.value)}></input>
              <button onClick={handleGetData}>Buscar</button>
            </div>
            <UserInfo headerImage={currentUser?.avatar_url}  user={currentUser?.name} userName={currentUser?.login} userDescription={currentUser?.bio}/> 
            <hr/> 
            <RepoList repoList={repos}/>
         </div>
      </div>
    </div>
  );
}

export default App;
