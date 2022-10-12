import { slide as Menu } from "react-burger-menu";
import PropTypes from "prop-types";

import "../styles/navbar.css";

const Navbar = (props) => (
  <Menu styles={{ bmBurgerButton: { top: props.btnStyle }}} >
    <a className="menu-item" href="/">
      Home
    </a>
    <a className="menu-item" href="/maintenance-schedule">
      Maintenance Schedule
    </a>
  </Menu>
);

Navbar.propTypes = {
  btnStyle: PropTypes.string,
};

export default Navbar;
