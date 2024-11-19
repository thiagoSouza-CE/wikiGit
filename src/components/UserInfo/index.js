import React from 'react';
import "./style.css"
import defaultUser from "../../assets/defaultUser.svg";

function UserInfo({headerImage, user, userName, userDescription}) {
   return(
    <div className="headerComponent">
        <img src={headerImage || defaultUser} alt="imagem usuario" className="user-image"/>
        <div className='user-info'>
            <h3>{user || ""}</h3>
            <span>@{userName || ""}</span>
            <p>{userDescription || ""}</p>
        </div>
    </div>
   )
}

export default UserInfo;