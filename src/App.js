import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';

class App extends Component {
  constructor() {
    super();
    this.state = {
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
      homePage: true,
      loginPage: false
    }

    this.goToHome = this.goToHome.bind(this);
    this.goToLogin = this.goToLogin.bind(this);
  }

  goToHome() {
    this.setState({ homePage: true, loginPage: false });
  }

  goToLogin() {
    this.setState({ homePage: false, loginPage: true });
  }

  render() {
    return (
      <>
        <div className="header">
          <h2>Logo</h2>
          <div className="header__menu-items">
            <p className="menu-item" onClick={this.goToHome}>Home</p>
            <p className="menu-item" onClick={this.goToLogin}>Login</p>
          </div>
        </div>

        {this.state.homePage && <HomePage items={this.state.listItems} />}

        {this.state.loginPage && <LoginPage />}
      </>
    )
  }
}

export default App;
