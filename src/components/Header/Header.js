import SignIn from '../SignIn/SignIn';
import SignOut from '../SignOut/SignOut';
import './Header.scss';

const Header = (props) => {

  return (
    <div id="header">
      <div>Oishii Cart</div>
      {props.user ? <SignOut user={props.user} auth={props.auth}/> : <SignIn auth={props.auth}/>}
    </div>

  );
}

export default Header;