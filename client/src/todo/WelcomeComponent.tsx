import { Link, useParams } from "react-router-dom";
import { AxiosResponse } from "axios";
import { useState } from "react";
import { retrieveHelloWorldPathVariable } from "./api/HelloWorldApiService";

export default function WelcomeComponent() {
  const { username } = useParams();
  const [message, setMessage] = useState("");

  const callHelloWorldRestApi = () => {
    console.log("Called API");
    retrieveHelloWorldPathVariable("Sam")
      .then((response) => successfulResponse(response))
      .catch((error) => errorResponse(error))
      .finally(() => console.log("cleanup"));
  };

  const successfulResponse = (response: AxiosResponse) => {
    console.log(response);
    setMessage(response.data.message);
  };

  const errorResponse = (error: any) => {
    console.log(error);
  };

  return (
    <div className="container">
      <h1>Welcome {username}</h1>
      <div className="container">
        Your todos: <Link to="/todos">Todos</Link>
      </div>
      <div>
        <button className="btn btn-success" onClick={callHelloWorldRestApi}>
          Call REST Api
        </button>
        <div>{message}</div>
      </div>
    </div>
  );
}
