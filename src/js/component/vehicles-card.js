import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "./../store/appContext";

export const VehiclesCard = props => {
	const { store, actions } = useContext(Context);

	const setFavorite = (e, id) => {
		e.preventDefault();
		e.stopPropagation();

		if (localStorage.getItem("favorite_" + id)) {
			localStorage.removeItem("favorite_" + id);
			e.target.classList.replace("fas", "far");
		} else {
			localStorage.setItem("favorite_" + id, id);
			e.target.classList.replace("far", "fas");
		}
	};

	const selected = () => {
		return "fas fa-bookmark fas-1,5x float-right p-2";
	};
	const unselected = () => {
		return "far fa-bookmark fas-1,5x float-right p-2";
	};

	const tryRequire = path => {
		try {
			return require("../../img/" + path);
		} catch (err) {
			return "http://placehold.it/420x300";
		}
	};

	return (
		<div className="card m-2 border-0">
			<div className="card-body p-0">
				<img
					src={tryRequire(props.id.replace(" ", "-").replace("/", "") + ".jpg")}
					alt=""
					className="img-fluid"
					style={{
						height: "300px",
						width: "420px",
						objectFit: "cover"
					}}
				/>
				<span className="card-title h4 pl-2">{props.item.name}</span>
				<i
					className={
						localStorage.getItem("favorite_" + props.id.replace(" ", "-")) ? selected() : unselected()
					}
					id={props.id.replace(" ", "-")}
					onClick={e => setFavorite(e, props.id.replace(" ", "-"))}
				/>
				<p className="card-text pl-2">Model: {props.item.model}</p>
			</div>
			<div className="card-footer justify-content-center pl-2">
				<Link className="btn btn-info" to={"/vehicles/" + props.item.url.slice(30)}>
					See More
				</Link>
			</div>
		</div>
	);
};

VehiclesCard.propTypes = {
	item: PropTypes.object,
	id: PropTypes.string
};
