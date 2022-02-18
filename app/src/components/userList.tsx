import React, { useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const UserList: React.FC = () => {
    const {errors, loading, users} = useTypedSelector( state => state.user)
    const {fetchUsers} = useActions()
    
    useEffect(() => {
        fetchUsers()
    }, [])

    if(loading) {
       return <h1>Loading...</h1>
    }

    if (errors) {
        return <h1> {errors} </h1>
     }
    return (
        <div>
            {users.map(user => <div key={user.id}> {user.name} </div> )}
        </div>
    );
};

export default UserList;