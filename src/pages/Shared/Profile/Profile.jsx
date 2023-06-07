import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const Profile = () => {
    const{user} = useContext(AuthContext);
    return (
        <div>
            <img src={user?.photoURL} />
        </div>
    );
};

export default Profile;