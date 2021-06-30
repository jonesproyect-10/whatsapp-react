import { Avatar } from '@material-ui/core';
import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import db from './firebase.js';

import './SidebarChat.css';


function SidebarChat({id,name,addnewChat}) {
    const[seed, setSeed]=useState("");
    useEffect(()=>{
        setSeed(Math.floor (Math.random()*5000));

    },[]);

    const createChat=()=>{
        const rooName=prompt("enter name for CHAT rooms");
        if (rooName){
            db.collection("rooms").add({
                name:rooName,

            });

        }
    };

    return !addnewChat?(
        <Link to={`/rooms/${id}`}>
               <div className="sidebarChat">
            <Avatar src={ `https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="sidebarChat__info">
                <h2>{name}</h2>
                <p>This is the last message</p>

            </div>
            
        </div>


        </Link>
     
    ):(
        <div onClick={createChat}
            className="sidebarChat">
                <h2>add new Chat</h2>

        </div>
    );
    
}

export default SidebarChat
