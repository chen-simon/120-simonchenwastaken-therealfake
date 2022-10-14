import SignIn from './SignIn';
import SignOut from './SignOut';

const Header = (props) => {

  return (
    <div id="header">
      <div>Oishii Cart</div>
      {props.user ? <SignOut auth={props.auth}/> : <SignIn auth={props.auth}/>}
    </div>

  );
}

export default Header;