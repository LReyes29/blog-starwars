import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { PeopleCard } from "./../component/people-card";
import { Context } from "./../store/appContext";

export const Vehicles = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="row">
				{!!store.vehicles.results &&
					store.vehicles.results.map((item, i) => {
						return (
							<div className="col-md-4" key={i}>
								<PeopleCard item={item} />
							</div>
						);
					})}
			</div>
			<div className="row">
				<div className="col-md-12 d-flex justify-content-between">
					<button
						disabled={store.vehicles.previous === null ? true : false}
						className="btn btn-info btn-md"
						onClick={() => actions.getVehicles(store.vehicles.previous)}>
						Previus
					</button>
					<button
						disabled={store.vehicles.next === null ? true : false}
						className="btn btn-info btn-md"
						onClick={() => actions.getVehicles(store.vehicles.next)}>
						Next
					</button>
				</div>
			</div>
		</div>
	);
};
