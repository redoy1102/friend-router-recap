import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {id} = useParams();
    const [friend, setFriend] = useState({});
    console.log(friend);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    },  [])

    return (
        <div>
            <h1>{friend.name}</h1>
            <p>{friend.phone}</p>
        </div>
    );
};

export default FriendDetail;