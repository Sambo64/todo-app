import {Link} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../seurity/AuthContext";

export const Header = () => {
	const authContext = useContext(AuthContext);
	return (
		<header className="border-bottom border-light border-5 mb-5 p-2" >
			<div className="container">
				<div className="row">
					<nav className="navbar navbar-expand-lg">
						<Link className="navbar-brand ms-2 fs-2 fw-bold text-black" to="/">Website</Link>
						<div className="collapse navbar-collapse">
							<ul className="navbar-nav">
								<li className="nav-item"><Link className="nav-link" to="/welcome/Sambo">Home</Link></li>
								<li className="nav-item"><Link className="nav-link" to="/todos">Todos</Link></li>
							</ul>
						</div>
						<ul className="navbar-nav">
							<li className="nav-item"><Link className="nav-link" to="/logout">Logout</Link></li>
							<li className="nav-item"><Link className="nav-link" to="/">Login</Link></li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	)
}