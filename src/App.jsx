import React from 'react';
import SearchBar from './components/searchBar';
import Users from "./components/users";

class App extends React.Component {
  state = {
    users: [],
    allUsersMinusTheOnesWeDeleted: [],
    filteredUsers: []
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=100')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          users: data.results,
          allUsersMinusTheOnesWeDeleted: data.results,
          filteredUsers: data.results
        })
      })
      .catch(e => console.error(e));
  }

  handleInput = (e) => {
    // console.log(e.target.value);
    let filteredUsers = this.state.users.filter(user => {
      let fullName = user.name.first + " " + user.name.last;
      fullName = fullName.toLowerCase();
      return fullName.includes(e.target.value.toLowerCase());
    })
    this.setState({ filteredUsers });
  }

  handleDelete = (id) => {
    if (!id) {
      alert("Missing ID for this user (check your API)");
      return;
    }

    console.log(id);
    let users = this.state.users.filter(user => {
      // return user.id.value !== id;
      if (user.id.value === id) {
        return false;
      }
      return true;
    })
    this.setState({ allUsersMinusTheOnesWeDeleted: users });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row height d-flex justify-content-center align-items-center mt-3">
            <div className="col-md-3 col-xs-9 order-xs-1">
              <h1>Users List</h1>
            </div>
            <SearchBar onInputEvent={this.handleInput} length={this.state.filteredUsers?.length ?? this.state.users.length} />
          </div>
          <hr />
          <Users users={this.state.filteredUsers || this.state.users} deleteUser={this.handleDelete} />
        </div>
      </div>

    );
  }
}




export default App;
