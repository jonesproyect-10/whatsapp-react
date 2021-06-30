import React,{useEffect,useState} from 'react';
import {Avatar,IconButton} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import {SearchOutlined} from "@material-ui/icons";
import './Sidebar.css';
import SidebarChat from './SidebarChat.js';
import db from './firebase';


function Sidebar() {
    const [rooms,setRooms]=useState([]);
    
    useEffect(()=>{
     const unsubscribe =  db.collection("rooms").onSnapshot((snapshot)=>
        
        setRooms(
        snapshot.docs.map((doc)=>({
            id:doc.id,
            data:doc.data(),

        }))
        )
        );
        return()=>{
            unsubscribe();
        }


    },[]);
    return (
        <div className="sidebar">
        <div className="sidebar__header">
            <Avatar/>
          <div className="sidebar__headerRight">
          <IconButton>
          <MoreVertIcon/>
          </IconButton>

          <IconButton>
          <ChatIcon/>
          </IconButton>

          <IconButton>
          <DonutLargeIcon/>
          </IconButton>

        </div>
  

        </div>

        <div className="sidebar__search">
        <div className="sidebar__searchContainer">
            <SearchOutlined/>
            <input placeholder="Search of start new chat" type="text"/>

        </div>

            
        </div>
        <div className="sidebar__chats">
            <SidebarChat addnewChat/>
            {rooms.map((room)=>
            <SidebarChat key={room.id}id={room.id}name={room.data.name}/>)}

        </div>


        </div>
    )
}

export default Sidebar
