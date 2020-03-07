import React from 'react';

const Profil = (props)=>{
    return(
        
        <div>
            <img src={props.mp.photo} width="200px" alt=".."/>
            <p>{props.mp.Name.firstName}   {props.mp.Name.lastName}</p>
            <a href = {props.mp.profileLink && props.mp.profileLink}> My Compte Facebook </a>
            
        </div>

    )
}
export default Profil;
