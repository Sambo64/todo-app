import {Link, useParams} from "react-router-dom";

export default function WelcomeComponent() {
    const {username} = useParams();

    return (
        <div className="container">
            <h1>Welcome {username}</h1>
            <div className="container">
                Your todos: <Link to="/todos">Todos</Link>
            </div>
        </div>
    )
}
