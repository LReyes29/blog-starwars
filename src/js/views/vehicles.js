import React, { useContext } from "react";
import "../../styles/home.scss";
import { VehiclesCard } from "./../component/vehicles-card";
import { Context } from "./../store/appContext";

export const Vehicles = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid bg-dark pt-3">
			<div className="row">
				{!!store.vehicles.results &&
					store.vehicles.results.map((item, i) => {
						return (
							<div className="col-md-4" key={i}>
								<VehiclesCard item={item} id={item.name} />
							</div>
						);
					})}
			</div>
			<div className="row">
				<div className="col-md-12 d-flex justify-content-between">
					<button
						disabled={store.vehicles.previous === null ? true : false}
						className="btn btn-info btn-md my-3"
						onClick={() => actions.getVehicles(store.vehicles.previous)}>
						Previous
					</button>
					<button
						disabled={store.vehicles.next === null ? true : false}
						className="btn btn-info btn-md my-3"
						onClick={() => actions.getVehicles(store.vehicles.next)}>
						Next
					</button>
				</div>
			</div>
		</div>
	);
};
