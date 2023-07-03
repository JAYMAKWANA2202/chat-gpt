import { styled } from "styled-components";

const MessageDiv = styled.div`
  background-color: rgb(52, 53, 65);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;
export default function WelcomePage() {
  return (
    <div className="text-center">
      <MessageDiv>
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
      </MessageDiv>
    </div>
  );
}
