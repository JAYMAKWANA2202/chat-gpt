import { Link } from "react-router-dom";
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
        <h3>
          Welcome to Dataplor
        </h3>
        <div>
          <Link to='/login' className="btn btn-success m-2" style={{ float: "left" }}>
            Login
          </Link>
          <Link to='/signup' className="btn btn-success m-2" style={{ float: "left" }}>
            Sign up
          </Link>
        </div>
      </MessageDiv>
    </div>
  );
}
