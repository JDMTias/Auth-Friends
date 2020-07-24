import React, { useEffect, useContext } from "react";
import { axiosWithAuth } from "./utils/axioswauth";
import AddFriend from "./addFriend";
import FriendsContext  from "./utils/context";
import EditFriend from "./editFriend";



const FriendsList = () => {

    const [friends, setFriends, isEditing, setIsEditing]=useContext(FriendsContext)

    const onDelete = (id) => {
        axiosWithAuth()
        .delete(`/api/friends/${id}`)
        .then((res) => {
            console.log(res)
            setFriends(res.data)
        })
    }

 const getData = () => {
    axiosWithAuth()
      .get("/api/friends")
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setFriends(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
      getData()
  },[])

    return (
      <div>
        <AddFriend />
        <h2>My Friends</h2>
        {friends.map((friend) => {
          return (
            <div key={friend.id}>
              <p>{friend.name}</p>
              <p>{friend.age}</p>
              <p>{friend.email}</p>
              <button onClick={()=> onDelete(friend.id)}>Delete</button>
              <button onClick={()=> setIsEditing(true)}>Edit Friend</button>
             { isEditing ? <EditFriend currentFriend={friend}/> : ''}
            </div>
          );
        })}
      </div>
    );
  }

export default FriendsList;
