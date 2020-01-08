import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import { Context } from "./../store/appContext";

export const PlanetsDetails = props => {
	const { store, actions } = useContext(Context);
	const [planets, setPlanets] = useState({});

	const resp = actions.getFetch("https://swapi.co/api/planets/" + props.match.params.id);
	resp.then(resp => resp.json()).then(data => setPlanets(data));
	//console.log(planets);
	return (
		<div className="pt-3 bg-info text-light">
			<h2>Name: {planets.name}</h2>
			<h2>Rotation period: {planets.rotation_period}</h2>
			<h2>Orbital period: {planets.orbital_period}</h2>
			<h2>Diameter: {planets.diameter}</h2>
			<h2>Climate: {planets.climate}</h2>
			<h2>Gravity: {planets.gravity}</h2>
			<h2>Terrain: {planets.terrain}</h2>
			<h2>Surface water: {planets.surface_water}</h2>
			<h2>Population: {planets.population}</h2>

			<Link className="btn btn-secondary btn-block mt-3" to="/planets">
				<h5>Return</h5>
			</Link>
		</div>
	);
};

PlanetsDetails.propTypes = {
	match: PropTypes.object
};
