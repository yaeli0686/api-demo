import React from 'react';
import UserCard from './userCard';

class Users extends React.Component {
    render() {
        return <div className="row">
            {this.props.users.map((user) => (
                <UserCard user={user} key={user.id.value + user.name.first + user.name.last} onDelete={this.props.deleteUser} />
            ))}
        </div>
    }


}

export default Users;