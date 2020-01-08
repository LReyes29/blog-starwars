import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import { Context } from "./../store/appContext";

export const HomeDetails = props => {
	const { store, actions } = useContext(Context);
	const [people, setPeople] = useState({});

	const resp = actions.getFetch("https://swapi.co/api/people/" + props.match.params.id);
	resp.then(resp => resp.json()).then(data => setPeople(data));
	//console.log(people);
	return (
		<div className="pt-3 bg-info text-light">
			<h2>Name: {people.name}</h2>
			<h2>Height: {people.height}</h2>
			<h2>Mass: {people.mass}</h2>
			<h2>Hair color: {people.hair_color}</h2>
			<h2>Skin color: {people.skin_color}</h2>
			<h2>Eye color: {people.eye_color}</h2>
			<h2>Birth year: {people.birth_year}</h2>
			<h2>Gender: {people.gender}</h2>

			<Link className="btn btn-secondary btn-block mt-3" to="/">
				<h5>Return</h5>
			</Link>
		</div>
	);
};

HomeDetails.propTypes = {
	match: PropTypes.object
};
