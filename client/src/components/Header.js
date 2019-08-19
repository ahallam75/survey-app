import React from "react";

class Header extends React.Component {
  render() {
    return (
      <nav className="container">
        <div class="nav-wrapper">
          <a href="#" className="left brand-logo">
            Survey-App
          </a>
          <ul className="right">
            <li>
              <a>Login with Google</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
