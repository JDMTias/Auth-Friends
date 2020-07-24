import React, {useContext, useState} from "react";
import axios from 'axios'
import { axiosWithAuth } from "./utils/axioswauth";
import FriendsContext from './utils/context'

const initialFriend = {
    
    name: "",
    age: "",
    email: "",
  
};

const AddFriend = () => {
    const [friends, setFriends]=useContext(FriendsContext)

    const [newFriend, setnewFriend]=useState(initialFriend)
  

  const changeHandler = (e) => {
    setnewFriend({
      
        ...newFriend,
        [e.target.name]: e.target.value,
    
    });
  };

  const addFriend = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("http://localhost:5000/api/friends", newFriend)

      .then((res) => {
        console.log(res);
        console.log(res.data);
        setFriends(res.data)
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
      <button type="submit">Add a Friend!</button>
      </form>
    )}


export default AddFriend;
