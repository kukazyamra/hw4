import React, {useEffect} from 'react';
import classes from './UserList.module.css'

function UserList() {
    const [users, setUsers] = React.useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])

    return (
        <div className={classes.userlist}>
            <h1>UserList</h1>
            {users.map((user) => (
                <p key={user.id}><b>Имя</b>: {user.name}; <b>email</b>: {user.email}</p>
            ))}
        </div>
    );
}

export default UserList;