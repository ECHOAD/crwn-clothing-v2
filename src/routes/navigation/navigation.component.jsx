import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import { signOutHandler } from "../../utils/firebase/firebase.utils";

import {
  NavigationContainer,
  LogoContainer,
  NavLinksContainer,
} from "./navigation.styles";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <Logo className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>

          {currentUser ? (
            <Link className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </Link>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </NavLinksContainer>

        {isOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
