import React, {Component, useState} from 'react'

export const FriendsContext = React.createContext()

const FriendsProvider = (props) => {
   const [friends, setFriends] = useState([])
    const [isEditing, setIsEditing] = useState(false)
 
   
        return (
            <FriendsContext.Provider value={[
                friends,
                setFriends,
                isEditing,
                setIsEditing
            ]}
            >
                {props.children}
            </FriendsContext.Provider>
        )
    

}

export default FriendsContext

export {FriendsProvider}