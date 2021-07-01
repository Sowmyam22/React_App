import React from "react";

function LoginPage(props) {
  return (
    <div className="form-control">
      <h2 style={{"textAlign": "center"}}>Please Login</h2>
      <form action="/action_page.php">
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" placeholder="Enter your email..." />

        <label htmlFor="password">Password</label>
        <input type="text" id="password" name="password" placeholder="Enter your password..." />

        <button className="login-button">Login</button>
      </form>
    </div>
  )
}

export default LoginPage;