export default function LoginPage() {
  return (
    <div className="text-center">
      <header className="d-flex align-items-cente  justify-content-center">
        <p>
          Welcome to ChatGPT
          <br /> Log in with your OpenAI account to continue
        </p>
        <div>
          <button className="btn btn-success m-2" style={{ float: "left" }}>
            Login
          </button>
          <button className="btn btn-success m-2" style={{ float: "left" }}>
            Sign up
          </button>
        </div>
      </header>
    </div>
  );
}
