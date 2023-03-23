function LoginForm() {
  //
  function handleSubmit(event) {
    event.preventDefault();
    console.log('react is in control');
  }

  return (
    <div>
      <h3>Login here</h3>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='email' />
        <input type='password' placeholder='password' />
        <button type='submit'>Login</button>
      </form>
      <hr />
      <button>Rodyti ivestis</button>
      <fieldset>
        <legend>Ivesta</legend>
        <p>Email: </p>
        <p>Password: </p>
      </fieldset>
    </div>
  );
}
export default LoginForm;
