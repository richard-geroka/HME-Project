const Auth = () => {
  return (
    <>
      <div className="auth-container">
        <form>
          <label htmlFor="username">username</label>
          <input type="text" id="username" placeholder="username" required />
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            placeholder="password"
            required
          />
        </form>
      </div>
    </>
  );
};

export default Auth;
