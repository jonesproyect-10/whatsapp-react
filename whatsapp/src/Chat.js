import React,{useEffect,useState} from 'react';
import { AttachFile,  InsertEmoticon,  MoreVert, SearchOutlined } from '@material-ui/icons';
import MicIcon from "@material-ui/icons/Mic";
import {Avatar,IconButton} from "@material-ui/core";

import "./Chat.css";
import { useParams } from 'react-router';
import db from './firebase.js';

function Chat() {
    const [input, setInput]=useState("");
    const[seed, setSeed]=useState("");
    const {roomId}=useParams();
    const [roomName, setRoomName]=useState("");

    useEffect(() => {
      if(roomId){
        db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot)=>setRoomName(snapshot.data().name))

        
      }
     
    }, [roomId])


    useEffect(()=>{
        setSeed(Math.floor (Math.random()*5000));

    },[]);

    const sendMessage=(e)=>{
e.preventDefault();
console.log("you type>>>",input);
setInput("");


    };
    


    return (
        <div className="chat">

          <div className="chat__header">
            <Avatar src={ `https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="chat__headerInfo">
                <h2>{roomName}</h2>
                <p>last seen at....</p>

            </div>
            
        <div className="chat__headerRight">
             <IconButton>
              <SearchOutlined/>
              </IconButton>

              <IconButton>
              <AttachFile/>
              </IconButton>

              <IconButton>
              <MoreVert/>
              </IconButton>
        </div>
                                              
            </div>
            
          <div className="chat__body">
              <p className={`chat__message ${true && 'chat__reciever'}`}>
              <span className="chat__name">sonny uita
              </span>
              hey
              <span className="chat__timestamp">3:52pm</span>
              </p>

            </div>
                        
          <div className="chat__footer">
            <InsertEmoticon/>
            <form>
              <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Type a message" type="text"/>
              <button onClick={sendMessage}type="submit">send a message</button>
            </form>
              <MicIcon/>     
          </div>

            
        </div>
    )
}

export default Chat
