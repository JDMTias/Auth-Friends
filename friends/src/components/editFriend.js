import React, {useContext, useState} from "react";
import axios from 'axios'
import { axiosWithAuth } from "./utils/axioswauth";
import FriendsContext from './utils/context'



const EditFriend = (props) => {
    const [friends, setFriends, isEditing, setIsEditing]=useContext(FriendsContext)

    const [newFriend, setnewFriend]=useState(props.currentFriend)
  

  const changeHandler = (e) => {
    setnewFriend({
      
        ...newFriend,
        [e.target.name]: e.target.value,
    
    });
  };

  const addFriend = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .put(`http://localhost:5000/api/friends/${props.currentFriend.id}`, newFriend)

      .then((res) => {
        console.log(res);
        console.log(res.data);
        setFriends(res.data)
        setIsEditing(false)
      })
      .catch((err) => console.log(err));
  };

  
    return ( 
      <form onSubmit={addFriend}>
           <input
        type="text"
        placeholder="name"
        name="name"
        value={newFriend.name}
        onChange={changeHandler}
      />
      <input
        type="text"
        placeholder="age"
        name="age"
        value={newFriend.age}
        onChange={changeHandler}
      />
      <input
        type="text"
        placeholder="email"
        name="email"
        value={newFriend.email}
        onChange={changeHandler}
      />
      <button type="submi" >Save</button>
      </form>
    )}


export default EditFriend;
