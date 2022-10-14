import SignIn from '../SignIn/SignIn';
import SignOut from '../SignOut/SignOut';

const Header = (props) => {

  return (
    <div id="header">
      <div>Oishii Cart</div>
      {props.user ? <SignOut auth={props.auth}/> : <SignIn auth={props.auth}/>}
    </div>

  );
}

export default Header;