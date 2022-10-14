import SignIn from '../SignIn/SignIn';
import SignOut from '../SignOut/SignOut';
import './Header.scss';

const Header = (props) => {

  return (
    <div id="header">
      <div class="websiteName">
        <img src="./items/ramen.png" alt="logo"/>
        Oishii Cart
      </div>
      {props.user ? <SignOut user={props.user} auth={props.auth}/> : <SignIn auth={props.auth}/>}
    </div>

  );
}

export default Header;