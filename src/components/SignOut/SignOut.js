const SignOut = (props) => {
  return props.auth.currentUser && (
    <div id="user-menu">
      <div>Welcome {props.user.displayName}!</div>
      <button onClick={() => props.auth.signOut()}>Sign Out</button>
    </div>
    
  );
}

export default SignOut;