import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    const {name,email,id} = props.friend;
    const friendStyle = {
        border: '2px solid red',
        borderRadius:'10px',
        margin: '10px',
        padding: '10px',
        width: '300px',
    }
    return (
        <div style={friendStyle} >
            <h1>{name}</h1>
            <p>{email}</p>

            <Link style={{textDecoration: 'none'}} to={`/friend/${id}`}>
            <Button variant="contained" color="primary">Show Detail</Button>
            </Link>
        </div>
    );
};

export default Friend;