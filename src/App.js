import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      listItems: [
        {
          title: "Product One",
          imageUrl: "https://www.windowscentral.com/sites/wpcentral.com/files/styles/large/public/field/image/2020/10/hp-spectre-x360-14-press-1.jpg",
          itemDesc: "Product one description"
        },
        {
          title: "Product Two",
          imageUrl: "https://fdn.gsmarena.com/imgroot/news/21/02/framework-laptop/-1200/gsmarena_001.jpg",
          itemDesc: "Product two description"
        },
        {
          title: "Product Three",
          imageUrl: "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2020_21/3359781/200521-college-student-laptop-stock-cs-419p-3359781.jpg",
          itemDesc: "Product three description"
        }
      ],
    }
  }

  componentDidMount() {
    const storedUserInformation = localStorage.getItem('isLoggedIn'); // fetching the user info from the local storage

    if (storedUserInformation) {
      this.setState({ isLoggedIn: true });
    }
  }

  loginHandler() {
    localStorage.setItem('isLoggedIn', true); // storing the logged in info in the local storage
    this.setState({ isLoggedIn: true })
  }

  logoutHandler() {
    localStorage.removeItem('isLoggedIn'); // removing the user info from the local storage
    this.setState({ isLoggedIn: false })
  }

  render() {
    return (
      <>
        <div className="header">
          <h2>Logo</h2>

          {this.state.isLoggedIn && <p className="menu-item" onClick={this.logoutHandler.bind(this)}>Logout</p>}
        </div>

        {!this.state.isLoggedIn && <Login onLogin={this.loginHandler.bind(this)} />}
        {this.state.isLoggedIn && <Home items={this.state.listItems} />}
      </>
    )
  }
}

export default App;
