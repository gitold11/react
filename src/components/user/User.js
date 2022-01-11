import React from 'react';

const User = ({name,username,email,id}) => {
    return (
        <div>
            {id}-{name}-{username}-{email}
        </div>
    );
};

export default User;