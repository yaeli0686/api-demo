import React from 'react';
import SearchBar from './components/searchBar';
import Users from "./components/users";

class App extends React.Component {
  state = {
    users: [],
    filteredUsers: null
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=100')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          users: data.results,
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

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row height d-flex justify-content-center align-items-center mt-3">
            <div className="col-md-3 col-xs-9 order-xs-1">
              <h1>Users List</h1>
            </div>
            <SearchBar onInput={this.handleInput} length={this.state.filteredUsers?.length ?? this.state.users.length} />
          </div>
          <hr />
          <Users users={this.state.filteredUsers || this.state.users} />
        </div>
      </div>

    );
  }
}




export default App;
