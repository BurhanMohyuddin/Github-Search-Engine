import React, { Component } from 'react';
import SearchBox from './components/SearchBox/SearchBox';
import UserInfo from './components/UserProfile/UserInfo';
import './App.css';
import 'tachyons';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userProfileResponse: {},
      userRepoResponse: [],
      username: '',
      error: false
    }
  }
  onSearchChange = (event) => {
    this.setState({ username: event.target.value }, () => {
      if (this.state.username.trim() === "") {
        this.setState({ username: undefined})
      }
      else {
        const url = `https://api.github.com/users/${this.state.username}?access_token=73c800d8ae136c7f17304141efb043ec5d656177`;
        fetch(url)
          .then(response => {
            if (response.ok) {
              return response.json()
            } else {
              throw new Error('Response is not correct. Perhaps wrong username');
            }
          })
          .then(res => {
            this.setState({ userProfileResponse: res }, () => {
              const repoUrl = ` https://api.github.com/users/${this.state.username}/repos?access_token=73c800d8ae136c7f17304141efb043ec5d656177`;
              fetch(repoUrl)
                .then(Reporesponse => Reporesponse.json())
                .then(repo => {
                  this.setState({ userRepoResponse: repo }, () => {
                  })
                });
            });
            this.setState({ error: false });
          }).catch(err => {
            this.setState({ error: true });
          });
      }
    })
  }
  render() {
    const {userProfileResponse , userRepoResponse , username , error} = this.state;
    return (
      <div className="App">
        <SearchBox searchChange={this.onSearchChange} />
        <UserInfo searchInfo={userProfileResponse}
          searchRepo={userRepoResponse} username={username} isError={error} />
      </div>
    );
  }
}
export default App;
