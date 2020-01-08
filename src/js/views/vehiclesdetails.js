import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import { Context } from "./../store/appContext";

export const VehiclesDetails = props => {
	const { store, actions } = useContext(Context);
	const [vehicle, setVehicle] = useState({});

	const resp = actions.getFetch("https://swapi.co/api/vehicles/" + props.match.params.id);
	resp.then(resp => resp.json()).then(data => setVehicle(data));
	//console.log(vehicle);
	return (
		<div className="pt-3 bg-info text-light">
			<h2>Name: {vehicle.name}</h2>
			<h2>Model: {vehicle.model}</h2>
			<h2>Manufacturer: {vehicle.manufacturer}</h2>
			<h2>Cost in credits: {vehicle.cost_in_credits}</h2>
			<h2>Length: {vehicle.length}</h2>
			<h2>Max atmosphering speed: {vehicle.max_atmosphering_speed}</h2>
			<h2>Crew: {vehicle.crew}</h2>
			<h2>Passengers: {vehicle.passengers}</h2>
			<h2>Cargo capacity: {vehicle.cargo_capacity}</h2>
			<h2>Passenger consumables gers: {vehicle.consumables}</h2>
			<h2>Vehicle class: {vehicle.vehicle_class}</h2>

			<Link className="btn btn-secondary btn-block mt-3" to="/vehicles">
				<h5>Return</h5>
			</Link>
		</div>
	);
};

VehiclesDetails.propTypes = {
	match: PropTypes.object
};
