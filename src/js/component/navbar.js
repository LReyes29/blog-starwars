import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/star-wars-logo.png";
import { Context } from "./../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	const style = {
		background: "black",
		height: "130px"
	};
	const style2 = {
		background: "black",
		height: "90px",
		width: "190px"
	};
	const style3 = {
		background: "black"
	};

	return (
		<div className="blog-header">
			<nav className="navbar navbar-light" style={style}>
				<div className="d-flex flex-row">
					<a className="navbar-brand text-secondary">
						<i className="fab fa-facebook" />
					</a>
					<a className="navbar-brand text-secondary">
						<i className="fab fa-instagram" />
					</a>
					<a className="navbar-brand text-secondary">
						<i className="fab fa-tumblr" />
					</a>
					<a className="navbar-brand text-secondary">
						<i className="fab fa-twitter" />
					</a>
					<a className="navbar-brand text-secondary">
						<i className="fab fa-youtube" />
					</a>
				</div>
				<Link to="/">
					<img src={logo} style={style2} />
				</Link>
				<form className="form-inline">
					<div className="input-group md-form form-sm form-2 pl-0">
						<input
							className="form-control mr-sm-2"
							type="search"
							placeholder="Search Star Wars"
							aria-label="Search"
						/>
						<div className="input-group-append">
							<span className="input-group-text red lighten-3" id="basic-text1">
								<i className="fas fa-search" aria-hidden="true" />
							</span>
						</div>
					</div>
				</form>
			</nav>
			<nav className="navbar navbar-dark mt-0 py-0 border border-secondary" style={style3}>
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Home</span>
				</Link>
				<Link to="/vehicles">
					<span className="navbar-brand mb-0 h1">Vehicles</span>
				</Link>
				<Link to="/planets">
					<span className="navbar-brand mb-0 h1">Planets</span>
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						<button
							className="btn btn-secondary dropdown-toggle"
							type="button"
							id="dropdownMenuButton"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							Favorites
						</button>
						<div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
							{store.favorites.map((item, i) => {
								return (
									<a className="dropdown-item" key={i} href="#">
										{item}
									</a>
								);
							})}
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};
