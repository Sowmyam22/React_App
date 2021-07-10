import React, { Component, useContext } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import PageNotFound from './pages/PageNotFound';
import ProfileSettings from './pages/ProfileSettings';
import AddToDo from './pages/AddToDo';
import MainHeader from './components/header/MainHeader';
import AuthContext from './store/auth-context';

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       isLoggedIn: false,
//       listItems: [
//         {
//           title: "Product One",
//           imageUrl: "https://www.windowscentral.com/sites/wpcentral.com/files/styles/large/public/field/image/2020/10/hp-spectre-x360-14-press-1.jpg",
//           itemDesc: "Product one description"
//         },
//         {
//           title: "Product Two",
//           imageUrl: "https://fdn.gsmarena.com/imgroot/news/21/02/framework-laptop/-1200/gsmarena_001.jpg",
//           itemDesc: "Product two description"
//         },
//         {
//           title: "Product Three",
//           imageUrl: "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2020_21/3359781/200521-college-student-laptop-stock-cs-419p-3359781.jpg",
//           itemDesc: "Product three description"
//         }
//       ],
//     }
//   }

//   componentDidMount() {
//     // const storedUserInformation = localStorage.getItem('isLoggedIn'); // fetching the user info from the local storage

//     // if (storedUserInformation) {
//     //   this.setState({ isLoggedIn: true });
//     // }
//     const authCtx = this.AuthContext;
//     console.log(this.AuthContext);
//   }

//   loginHandler() {
//     localStorage.setItem('isLoggedIn', true); // storing the logged in info in the local storage
//     this.setState({ isLoggedIn: true })
//   }

//   logoutHandler() {
//     localStorage.removeItem('isLoggedIn'); // removing the user info from the local storage
//     this.setState({ isLoggedIn: false })
//   }

//   render() {
//     return (
//       <div>
//         <MainHeader
//           isLoggedIn={this.state.isLoggedIn}
//           logoutHandler={this.logoutHandler.bind(this)}
//         />

//         <Switch>
//           {!this.state.isLoggedIn &&
//             <Route exact path="/">
//               <Login onLogin={this.loginHandler.bind(this)} />
//             </Route>
//           }

//           {this.state.isLoggedIn &&
//             <Route path="/home">
//               <Home items={this.state.listItems} />
//             </Route>
//           }

//           {this.state.isLoggedIn &&
//             <Route exact path="/profile">
//               <Profile />
//             </Route>
//           }

//           {this.state.isLoggedIn &&
//             <Route path="/profile/settings">
//               <ProfileSettings logoutHandler={this.logoutHandler.bind(this)} />
//             </Route>
//           }

//           <Route path='*'>
//             <PageNotFound />
//           </Route>
//         </Switch>
//       </div>
//     )
//   }
// }

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <div>
      <MainHeader />

      <Switch>
        {!authCtx.isLoggedIn &&
          <Route exact path="/">
            <Login />
          </Route>
        }

        {authCtx.isLoggedIn &&
          <Route path="/home">
            <Home items={[]} />
          </Route>
        }

        {authCtx.isLoggedIn &&
          <Route exact path="/profile">
            <Profile />
          </Route>
        }

        {authCtx.isLoggedIn &&
          <Route exact path="/to-do">
            <AddToDo />
          </Route>
        }

        {authCtx.isLoggedIn &&
          <Route path="/profile/settings">
            <ProfileSettings />
          </Route>
        }

        <Route path='*'>
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
